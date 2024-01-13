import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MapsService } from '../maps.service';

@Component({
  selector: 'app-gmaps1',
  templateUrl: './gmaps1.component.html',
  styleUrls: ['./gmaps1.component.scss'],
})
export class Gmaps1Component implements OnInit {
  @ViewChild('map', { read: ElementRef, static: true }) mapElement!: ElementRef;
  googleMaps: any;
  center = { lat: 17.4875, lng: 78.3953 }
  map: any;
mapClickListner:any
  // let DESTINATION_LONGITUDE= 78.3953
  constructor(private gmaps: MapsService, private renderer: Renderer2) { }

  ngOnInit() {
    // this.loadmap

  }
  ngAfterViewInit() {
    this.loadmap()
  }
  async loadmap() {
    try {
      let googlemaps: any = await this.gmaps.loadGoogleMaps();
      this.googleMaps = googlemaps;
      const mapEl = this.mapElement.nativeElement;
      const location = new googlemaps.LatLng(this.center.lat, this.center.lng)
      //googlemaps hold entire map
      this.map = new googlemaps.Map(mapEl, {
        center: location,
        zoom: 12
      });
      this.renderer.addClass(mapEl, 'visible');
      this.addMarker(location)
      this.onMapClick();
    } catch (e) {
      console.log(e)
    }
  }
  addMarker(location: any) {
    let googleMaps: any = this.googleMaps;
    const icon = {
      url: 'src/assets/bike_def.png',
      scaledSize: new googleMaps.Size(50, 50),
    };
    const iconBase =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

    const marker = new googleMaps.Marker({
      position: location,
      map: this.map,
      // icon: icon,
      icon: iconBase + 'parking_lot_maps.png',
      animation: googleMaps.Animation.DROP
    })
  }
  onMapClick(){
    //add marker on maps
    this.mapClickListner=this.googleMaps.event.addListener(this.map,"click",
    (mapsMouseEvent:any)=>{
     console.log(mapsMouseEvent.latLng.toJSON());
     this.addMarker(mapsMouseEvent.latLng)
    }
    )
  }
checkandRemoveMarker(marker:any){}


}
