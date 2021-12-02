export default class Clock {
    
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
