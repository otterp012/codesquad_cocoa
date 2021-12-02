export default class OuterRecommender {
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