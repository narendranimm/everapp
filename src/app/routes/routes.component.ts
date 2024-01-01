import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss'],
})
export class RoutesComponent  implements OnInit {
loc:any;
@ViewChild('map')
mapRef!: ElementRef<HTMLElement>;
newMap!: GoogleMap;

async createMap() {
  this.newMap = await GoogleMap.create({
    id: 'my-cool-map',
    element: this.mapRef.nativeElement,
    apiKey: 'AIzaSyCU4W4iQLV5ydrW3UxZncI_JdLi1EsKH5A',
    config: {
      center: {
        lat: 33.6,
        lng: -117.9,
      },
      zoom: 8,
    },
  });
}
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.address()
  }
  address(){
    this.http.get(`https://maps.googleapis.com/maps/api/directions/json?destination=Montreal&origin=Toronto&key=AIzaSyCU4W4iQLV5ydrW3UxZncI_JdLi1EsKH5A`).subscribe((res)=>{

    console.log(res)
    })
  }
}
