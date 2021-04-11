import { ILocation } from "./Location";

export enum MarkerIconType {
  STAR_PURPLE,
  STAR_YELLOW
}

const markerIcon = {
    STAR_PURPLE: 'http://maps.google.com/mapfiles/kml/paddle/purple-stars.png',
    STAR_YELLOW: 'http://maps.google.com/mapfiles/kml/paddle/ylw-stars.png'
};

export class Map {
    protected map: google.maps.Map;
    
    constructor(webElement: HTMLElement | null) {
        if (webElement !== null) {
            this.map = new google.maps.Map(webElement, {
              zoom: 2.4,
              center: {
                  lat: 0,
                  lng: 0
              },
              mapTypeId: 'satellite'
            });
        }
        else {
            throw Error('webElement must not be null.');
        }
    }
    addMarker(title: string, position: ILocation, icon=MarkerIconType.STAR_PURPLE) {
        console.log(icon);
        console.log(markerIcon[icon]);
        new google.maps.Marker({
            position: position,
            map: this.map,
            title: title,
            icon: markerIcon[icon]
        });
    };
}
