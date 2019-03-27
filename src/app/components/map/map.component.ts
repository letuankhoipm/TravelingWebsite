import { Component, OnInit } from '@angular/core';

export interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  icon: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  local;
  lat: number = 10.012525;
  lng: number = 105.744823;
  icon = {
    url: '../../../assets/icon/logo.png',
    scaledSize: {
      width: 40,
      height: 60
    }
  };

  markers: marker[] = [
    {
      lat: 10.880319,
      lng: 106.794486,
      label: 'A',
      draggable: true,
      icon: '../../../assets/logo.png',
    }
  ];
  styles = [
    {
      "featureType": "all",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "hue": "#ffb500"
        },
        {
          "lightness": "54"
        },
        {
          "saturation": "-61"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#444444"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "lightness": 45
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "on"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": "#46bcec"
        },
        {
          "visibility": "on"
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
