import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss'],
})
export class DirectionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
  
  }
  
  apiKey = 'AIzaSyCU4W4iQLV5ydrW3UxZncI_JdLi1EsKH5A';

  @ViewChild('map')
   mapRef!: ElementRef<HTMLElement>;
   newMap!: GoogleMap;
 
   async createMap() {
    const markerId = await this.newMap.addMarker({
      coordinate: {
        lat: 33.6,
        lng: -117.9
      }
    });
     this.newMap = await GoogleMap.create({
       id: 'my-cool-map',
       element: this.mapRef.nativeElement,
       apiKey: this.apiKey,
       config: {
         center: {
           
           lat:  17.448294,
           lng: 78.391487,
         },
         zoom: 8,
       },
     });
 
   }
  
 
}
