export default class WeatherGenerator {

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