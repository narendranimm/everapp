import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mapdirection',
  templateUrl: './mapdirection.page.html',
  styleUrls: ['./mapdirection.page.scss'],
})
export class MapdirectionPage implements OnInit {
  sourceLoacation='';
  destionation='';
@ViewChild('mapElement',{static:false}) mapElement: any;
 directionsService = new google.maps.DirectionsService();
 directionsRenderer = new google.maps.DirectionsRenderer();
  constructor() { }

  ngOnInit() {
  }
ngAfterViewInt(){
this.loadMapwithDirection()
}
loadMapwithDirection(){

  var map = new google.maps.Map(this.mapElement.nativeElement,
  {
    zoom:7,
    center: {lat:41.85,lng:-87.95}
  });
  this.directionsRenderer.setMap(map);
}

 calcRoute(directionsService:any,directionsRenderer:any) {
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  var start = this.sourceLoacation;
  var end = this.destionation;
  var request = {
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  };
  directionsService.route(request, function(result:any, status:any) {
    if (status == 'OK') {
      directionsRenderer.setDirections(result);
    }else{
      window.alert('Direction failes')
    }
  });
}
}
