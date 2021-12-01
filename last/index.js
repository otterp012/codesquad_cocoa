
(function() { navigator.geolocation.getCurrentPosition((location) => {
    localStorage.setItem('userLatitude', JSON.stringify(location.coords.latitude));
    localStorage.setItem('userLongitude', JSON.stringify(location.coords.longitude));

}) })();

class Clock {
    constructor( {template} ){
        this.template = template;
    }

    renderDate() {
        const date = new Date();
    
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();

        month < 10 ? month = '0' + month : month;
        day < 10 ? day = '0' + day : day;

        const nowDate = this.template
                .replace('first', year)
                .replace('second', month)
                .replace('third', day);

        const $nowDate = document.querySelector('.now-date');
        $nowDate.textContent = nowDate;
    }

    renderTime() {
        const time = new Date();

        let hours = time.getHours();
        let mins = time.getMinutes();
        let secs = time.getSeconds();

        hours < 10 ? '0' + hours : hours;
        mins < 10 ? '0' + mins : mins;
        secs < 10 ? secs = '0' + secs : secs;

        const nowTime = this.template
            .replace('first', hours)
            .replace('second', mins)
            .replace('third', secs)
            .replaceAll('-', ':');

        const $nowTime = document.querySelector('.now-time');
        $nowTime.textContent = nowTime;
    }

    stop() {
        clearTimeout(this.timer);
    }

    TimeStart() {
        this.renderTime();
        this.timer = setInterval(() => this.renderTime(), 1000)
    }

    init() {
        this.renderDate();
        this.TimeStart();
    }
}

let clock = new Clock( {template: 'first-second-third'});
clock.init();

class OpenWeatherAPI {

    constructor() {
        this.latitude = localStorage.getItem('userLatitude') || null;
        this.longitude = localStorage.getItem('userLongitude') || null;
        this.defaultCity = 'Seoul';
        this.weatherData = {};
    }

    setWeatherData() {
        if(this.latitude) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&units=metric&lang=kr&appid=0090be4456653fec0d00bd835c9c526a`)
                .then((res) => { return res.json(); })
                .then((res) => {
                    localStorage.setItem('weatherData', JSON.stringify(res));
                })
        } else {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.defaultCity}&units=metric&lang=kr&appid=0090be4456653fec0d00bd835c9c526a`)
                .then((res) => { return res.json(); })
                .then((res) => {
                    localStorage.setItem('weatherData', JSON.stringify(res))
                })
        }
    }

    getWeatherData() {
        this.setWeatherData();

        const todayWeatherData = JSON.parse(localStorage.getItem('weatherData'));
        this.weatherData.temp = todayWeatherData.main.temp;
        this.weatherData.weather = todayWeatherData.weather[0].main;
    }

    renderTodayWeather() {
        this.getWeatherData();

        const $nowWeather = document.querySelectorAll('.today-weather-text');
        $nowWeather.forEach((node, index) => {
            node.textContent = Object.values(this.weatherData)[index] + node.textContent;
        })
    }
}

const weather = new OpenWeatherAPI();
weather.renderTodayWeather();

class Recommend {
    constructor() {
        this.temp = document.querySelector('#main-temp-text').textContent;
        this.outer = "";
    }
    determineOuter() {
        const nowTemp = parseFloat(this.temp);

        if( nowTemp >= 15 ) return '1';
        else if( nowTemp >= 10 && nowTemp < 15 ) return '2';
        else if( nowTemp > 5 && nowTemp < 10) return '3';
        else if( nowTemp > 0 && nowTemp <= 5) return '4';
        else if( nowTemp <= 0) return '5';
        
    }
    
    renderOuter() {
        const outerImage = document.createElement('img');
        document.querySelector('.recommend-container').appendChild(outerImage);
        outerImage.setAttribute('class', 'outer-image');

        const weatherNum = this.determineOuter();
    
        const clothes = {
            'paka' : `https://cdn-icons.flaticon.com/png/512/1926/premium/1926409.png?token=exp=1638337847~hmac=3b30fa08da562ecbd44edda00215714a`,
            'coat' : `https://cdn-icons.flaticon.com/png/512/1681/premium/1681991.png?token=exp=1638337749~hmac=e29f7797663c65411574182bd01f3ac8`,
            'fleece' : `https://cdn-icons-png.flaticon.com/512/3126/3126039.png`,
            'sweat': `https://as2.ftcdn.net/v2/jpg/02/28/21/31/1000_F_228213120_wNhUQMulV62tpCsx4BgfhMM4ceqE4NGr.jpg`,
            'cardigan': `https://cdn-icons-png.flaticon.com/512/3893/3893062.png`
        }

        switch(+weatherNum) {
            case 1: 
            outerImage.setAttribute('src', clothes.sweat);
            break;
            case 2: 
            outerImage.setAttribute('src', clothes.cardigan);
            break;
            case 3: 
            outerImage.setAttribute('src', clothes.fleece);
            break;
            case 4: 
            outerImage.setAttribute('src', clothes.coat);
            break;
            case 5: 
            outerImage.setAttribute('src', clothes.paka);
            break;
        }
    }
}
let exp = new Recommend();
exp.renderOuter();

class KakaoMapAPI {
    constructor() {
        this.latitude = localStorage.getItem('userLatitude') || null;
        this.longitude = localStorage.getItem('userLongitude') || null;
        this.defaultCoordinate = [37.566826, 126.9786567];

        this.coordinate = [];
        if(this.latitude) {
            this.coordinate.push(this.latitude);
            this.coordinate.push(this.longitude);
        } else {
            this.coordinate = this.defaultCoordinate;
        }
    }

    renderMap() {
        const $mapContainer = document.querySelector('#map');
        const mapOption = {
            center: new kakao.maps.LatLng(this.coordinate[0], this.coordinate[1]),
            lever: 3,
        }
        
        const map = new kakao.maps.Map($mapContainer, mapOption);
    }
    
    renderMapText() {
        this.renderMap();
        const geocoder = new kakao.maps.services.Geocoder();

        const coord = new kakao.maps.LatLng(this.coordinate[0], this.coordinate[1]);
        const callback = function(result, status) {
        if (status === kakao.maps.services.Status.OK) {
            const $mapText = document.querySelector('.map-text');
            $mapText.textContent = `${result[0].address.address_name}`;
        }
    };
        geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    }
}

let kakaoma = new KakaoMapAPI();
kakaoma.renderMapText();
