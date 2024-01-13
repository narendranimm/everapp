import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { MapsService } from '../maps.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-gmaps2',
  templateUrl: './gmaps2.component.html',
  styleUrls: ['./gmaps2.component.scss'],
})
export class Gmaps2Component  implements OnInit,OnInit {
  //marker push 
  @ViewChild('map', { read: ElementRef, static: true }) mapElement!: ElementRef;
  googleMaps: any;
  center = { lat: 17.4875, lng: 78.3953 }
  map: any;
  markerClickListener:any;
mapClickListner:any
markers:any[]=[]
  // let DESTINATION_LONGITUDE= 78.3953
  constructor(private gmaps: MapsService, private renderer: Renderer2,private actionSheetCtrl: ActionSheetController) { }

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
    });
    this.markers.push(marker);
    //here you can add actionsheet to add or remove the addrss
    this.presentActionSheet()
    this.markerClickListener=this.googleMaps.event.addListener(marker,"click",
    (mapsMouseEvent:any)=>{
     console.log('markerclick',marker);
     this.checkandRemoveMarker(marker)
    }
    );

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
checkandRemoveMarker(marker:any){


  const index =this.markers.findIndex(x=>x.position.lat() == marker.position.lat() && x.position.lng() == marker.position.lng());
  if(index >=0){
    this.markers[index].setMap(null)
    this.markers.splice(index,1);
    return;
  }
}

ngOndestory(){
  //when not in use this page remove otherwise consume data
this.googleMaps.event.removeAllListerners();
// or
if(this.mapClickListner)this.googleMaps.event.removeListener(this.mapClickListner);
if(this.markerClickListener)this.googleMaps.event.removeListener(this.markerClickListener);
}


//action to save addrs not rqd
async presentActionSheet() {
  const actionSheet = await this.actionSheetCtrl.create({
    header: 'Added Marker',
    buttons: [
      {
        text: 'Remove',
        role: 'destructive',
        data: {
          action: 'delete',
        },
      },
      {
        text: 'Save',
        data: {
          action: 'save',
        },
      },
      {
        text: 'Cancel',
        role: 'cancel',
        data: {
          action: 'cancel',
        },
      },
    ],
  });

  await actionSheet.present();
}
}


