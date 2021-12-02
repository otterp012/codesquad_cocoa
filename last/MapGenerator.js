export default class MapGenerator {
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
