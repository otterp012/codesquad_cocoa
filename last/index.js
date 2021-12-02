
(function() { navigator.geolocation.getCurrentPosition((location) => {
    localStorage.setItem('userLatitude', JSON.stringify(location.coords.latitude));
    localStorage.setItem('userLongitude', JSON.stringify(location.coords.longitude));
}) })();

class Clock {

    constructor( ){
        this.nowDate;
        this.lastDate;
    }

    getDate() {
        const today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth()+1;
        let day = today.getDate();
        let lastDay = today.getDate() + 7;

        month < 10 ? month = '0' + month : month;
        day < 10 ? day = '0' + day : day;
        lastDay < 10 ? lastDay = '0' + lastDay : lastDay;

        this.nowDate = `${year}-${month}-${day}`;
        this.lastDate = `${year}-${month}-${lastDay}`;
    }
 
    renderTodayDate() {
        this.getDate();
        const $nowDate = document.querySelector('.now-date');
        $nowDate.textContent = this.nowDate;
    }

    renderInputDate() {
        const $dateInput = document.querySelector('.date-input');
        
        $dateInput.setAttribute('min', this.nowDate);
        $dateInput.setAttribute('max', this.lastDate);
    }

    renderTime() {
        const time = new Date();

        let hours = time.getHours();
        let mins = time.getMinutes();
        let secs = time.getSeconds();

        hours < 10 ? '0' + hours : hours;
        mins < 10 ? mins = '0' + mins : mins;
        secs < 10 ? secs = '0' + secs : secs;

        const nowTime = `${hours}:${mins}:${secs}`
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
        this.renderTodayDate();
        this.renderInputDate();
        this.TimeStart();
    }
}

let clock = new Clock();
clock.init();


class WeatherGenerator {

    constructor() {
        this.latitude = localStorage.getItem('userLatitude') || null;
        this.longitude = localStorage.getItem('userLongitude') || null;
        this.defaultCoordinate = [37.566826, 126.9786567];
        this.currentWeatherObj = {};
        this.futureWeatherArr;

        this.$tittle = document.querySelector('.tittle');
        this.$nowTemp = document.querySelector('#temp');
        this.$nowWeather = document.querySelector('#weather');
        this.inputDate;
        this.TimeDifference;
    }

    setWeatherData() {
        if(this.latitude) {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?&units=metric&lat=${this.latitude}&lon=${this.longitude}&exclude=minutely,hourly,alerts&appid=27eb1c068eb0f3b8c0e87520674751e4`)
                .then((res) => { return res.json(); })
                .then((res) => {
                    localStorage.setItem('weatherData', JSON.stringify(res));
                })
        } else {
            fetch(`https://api.openweathermap.org/data/2.5/onecall?units=metric&lat=${(this.defaultCoordinate)[0]}&lon=${(this.defaultCoordinate)[1]}&exclude=minutely,hourly,alerts&appid=27eb1c068eb0f3b8c0e87520674751e4`)
                .then((res) => { return res.json(); })
                .then((res) => {
                    localStorage.setItem('weatherData', JSON.stringify(res))
                })
        }
    }

    getCurrentWeatherData() {
        this.setWeatherData();

        const currentWeatherData = JSON.parse(localStorage.getItem('weatherData'))['current'];

        this.currentWeatherObj.temp = currentWeatherData.temp;
        this.currentWeatherObj.weather = currentWeatherData.weather[0].main;
    }

    renderCurrentWeather() {
        this.getCurrentWeatherData()
    
        this.$nowTemp.textContent = `${this.currentWeatherObj.temp}℃`;
        this.$nowWeather.textContent = this.currentWeatherObj.weather;
        this.$tittle.textContent = `NOW OUTER`;
        document.querySelector('.date-container').classList.remove('hidden');
    }

    getFutureWeatherData() {

        const funtureWeatherData = JSON.parse(localStorage.getItem('weatherData'));
        this.futureWeatherArr = new Array(8).fill(null);
    
        this.futureWeatherArr.forEach((item, index) => {
            if(index > 0) {
                this.futureWeatherArr[index-1] = [funtureWeatherData.daily[index].temp.day, funtureWeatherData.daily[index].weather[0].main];
            }
        })
        this.futureWeatherArr.pop();
    }

    renderFutureWeatherData(num) {
    
        this.$nowTemp.textContent = `${this.futureWeatherArr[num-1][0]}℃`;
        this.$nowWeather.textContent = this.futureWeatherArr[num-1][1];
        this.$tittle.textContent = document.querySelector('.date-input').value;
        document.querySelector('.date-container').classList.add('hidden');
    }

    renderWeatherData() {
        this.getFutureWeatherData();
        const $dateInput = document.querySelector('.date-input');
        const $dateChangeButton = document.querySelector('.date-change-button');
        $dateChangeButton.addEventListener(('click'), () => {
            this.inputDate = $dateInput.value;
            const endDay = new Date(this.inputDate);
            const startDay = new Date();

            this.TimeDifference = Math.ceil((endDay.getTime() - startDay.getTime()) / (1000 * 60 * 60 * 24));
            if(this.TimeDifference === -0) this.renderCurrentWeather();
            else this.renderFutureWeatherData(this.TimeDifference);
        })
    }
}

const weather = new WeatherGenerator();
weather.renderCurrentWeather();
weather.renderWeatherData();

class Recommend {
    constructor() {
        this.outerImage = document.querySelector('.outer-image');
        this.clothes = {
            'paka' : `paka.png`,
            'coat' : `coat.png`,
            'sweat': `https://as2.ftcdn.net/v2/jpg/02/28/21/31/1000_F_228213120_wNhUQMulV62tpCsx4BgfhMM4ceqE4NGr.jpg`,
            'cardigan': `https://cdn-icons-png.flaticon.com/512/3893/3893062.png`
        }
    }
    determineNum(temp) {

        if( temp > 15 ) return 'sweat';
        else if( temp > 10 && temp <= 15) return 'cardigan';
        else if( temp > 5 && temp <= 10) return 'coat';
        else if( temp <= 5) return 'paka';
    }

    determineOuter(string) {
        switch(string) {
            case 'paka': 
            this.outerImage.setAttribute('src', this.clothes['paka']);
            break;
            case 'coat': 
            this.outerImage.setAttribute('src', this.clothes['coat']);
            break;
            case 'cardigan': 
            this.outerImage.setAttribute('src', this.clothes['cardigan']);
            break;
            case 'sweat': 
            this.outerImage.setAttribute('src', this.clothes['sweat']);
            break;
            }
    }
    
    renderCurrentOuter() {
        const nowTemp = parseInt(document.querySelector('#temp').textContent);
        this.determineOuter(this.determineNum(nowTemp));
    }

    renderFutureOuter() {
        const futureTemp = parseInt(document.querySelector('#temp').textContent);
        this.determineOuter(this.determineNum(futureTemp));
    }

    renderOuter() {
        const $dateInput = document.querySelector('.date-input');
        const $dateChangeButton = document.querySelector('.date-change-button');
        $dateChangeButton.addEventListener(('click'), () => {
            this.inputDate = $dateInput.value;
            const endDay = new Date(this.inputDate);
            const startDay = new Date();

            this.TimeDifference = Math.ceil((endDay.getTime() - startDay.getTime()) / (1000 * 60 * 60 * 24));
            if(this.TimeDifference === -0) this.renderCurrentOuter();
            else this.renderFutureOuter();
        })
    }
}



let exp = new Recommend();
exp.renderCurrentOuter();
exp.renderOuter();

class MapGenerator {
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

    rederMapModal() {
        const $identifyLocationButton = document.querySelector('.identify-location-button');
        const $mapModal = document.querySelector('.map-modal');
        $identifyLocationButton.addEventListener('click', () => {
            if($mapModal.classList.contains('hidden')) {
                $mapModal.classList.remove('hidden');
                this.renderMapText();
            } 
            else $mapModal.classList.add('hidden');
        })
    }
}

let kakaoma = new MapGenerator();
kakaoma.rederMapModal();
