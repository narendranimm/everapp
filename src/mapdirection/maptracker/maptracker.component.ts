import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-maptracker',
  templateUrl: './maptracker.component.html',
  styleUrls: ['./maptracker.component.scss'],
})
export class MaptrackerComponent implements OnInit {
  @ViewChild('map', { read: ElementRef, static: false }) mapElement!: ElementRef;
  map: any;
  latitude: number=0;
  longitude: number=0;

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.loadMap();
    this.requestLocationPermission();
    
  }
  async requestLocationPermission() {
  }
  
  async getCurrentLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      console.log('Current Position:', position);
      
      // You can access latitude and longitude like this:
      this.latitude = position.coords.latitude;
this.longitude = position.coords.longitude;
  
      // Now you can use the latitude and longitude as needed.
    } catch (error) {
      console.error('Error getting current position', error);
    }
  }
  

  async loadMap() {debugger
    if (typeof google === 'undefined' || typeof google.maps === 'undefined') {
      console.error('Google Maps API not loaded!');
      return;
    }
    
    const mapOptions = {
      center: { lat: this.latitude, lng: this.longitude },
      zoom: 15,
    };
    
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // Add other map-related code here...
    // Example: Get directions from current position to a destination
    const currentPosition = await Geolocation.getCurrentPosition();
    let DESTINATION_LATITUDE = 17.4875;
    let DESTINATION_LONGITUDE = 78.3953;

    const destination = new google.maps.LatLng(17.4875, 78.3953);

    const directionsService = new google.maps.DirectionsService();
    const directionsDisplay = new google.maps.DirectionsRenderer();

    directionsDisplay.setMap(this.map);

    // Add a marker for the current position
    const currentLocationMarker = new google.maps.Marker({
      position: { lat: currentPosition.coords.latitude, lng: currentPosition.coords.longitude },
      map: this.map,
      title: 'Current Position',
      
      // icon: {
      //   url: 'assets/bike_def.png', // Replace with the path to your custom marker icon
      //   scaledSize: new google.maps.Size(30, 30),
      // },
    });

    // Add a marker for the destination
    const destinationMarker = new google.maps.Marker({
      position: destination,
      map: this.map,
      title: 'Destination',
      // icon: {
      //   url: 'assets/Logo.pmg', // Replace with the path to your custom marker icon
      //   scaledSize: new google.maps.Size(30, 30),
      // },
    });

    // Ensure that currentPosition exists before using it
    if (currentPosition) {
      const request: google.maps.DirectionsRequest = {
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
    // Example: Get directions from current position to a destination
    // let DESTINATION_LATITUDE=7.5167
    // let DESTINATION_LONGITUDE=7.5167
    // let DESTINATION_LONGITUDE=17.4875
    // let DESTINATION_LONGITUDE= 78.3953
  }
}
