import Clock from './clock.js'
import WeatherGenerator from './weatherGenerator.js';
import OuterRecommender from './OuterRecommender.js';
import MapGenerator from './MapGenerator.js';


(function() { navigator.geolocation.getCurrentPosition((location) => {
    localStorage.setItem('userLatitude', JSON.stringify(location.coords.latitude));
    localStorage.setItem('userLongitude', JSON.stringify(location.coords.longitude));
}) })();

function eventHandler() {
    const clock = new Clock();
    clock.init();

    const weather = new WeatherGenerator();
    weather.renderCurrentWeather();
    weather.renderWeatherData();

    const recommendedOuter = new OuterRecommender();
    recommendedOuter.renderCurrentOuter();
    recommendedOuter.renderOuter();

    const maps = new MapGenerator();
    maps.rederMapModal();
}

window.addEventListener('load', eventHandler);