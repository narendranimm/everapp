import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
// declare var google;
@Component({
  selector: 'app-mapmarker',
  templateUrl: './mapmarker.component.html',
  styleUrls: ['./mapmarker.component.scss'],
})
export class MapmarkerComponent  implements OnInit {
  @ViewChild('map', { read: ElementRef, static: false }) mapElement!: ElementRef ;
  map: any;

  constructor(private zone: NgZone) {}

  ngOnInit() {debugger
    this.loadMap();
  }

  async loadMap() {
    const currentPosition = await Geolocation.getCurrentPosition();
    const mapOptions = {
      center: { lat: currentPosition.coords.latitude, lng: currentPosition.coords.longitude },
      zoom: 15,
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    // Add a marker for the current position
    const marker = new google.maps.Marker({
      position: { lat: currentPosition.coords.latitude, lng: currentPosition.coords.longitude },
      map: this.map,
      title: 'Current Position',
    });

    // Example: Get directions from current position to a destination
    // let DESTINATION_LATITUDE=7.5167
    // let DESTINATION_LONGITUDE=7.5167
    // let DESTINATION_LONGITUDE=17.4875
    // let DESTINATION_LONGITUDE= 78.3953
    const destination = new google.maps.LatLng(17.4875, 78.3953);

    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();

    directionsDisplay.setMap(this.map);

    const request = {
      origin: new google.maps.LatLng(currentPosition.coords.latitude, currentPosition.coords.longitude),
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING,
    };

    directionsService.route(request, (response, status) => {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  }
  /// Add marker for the
}