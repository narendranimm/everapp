import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

declare var google:any;
@Component({
  selector: 'app-first-maps',
  templateUrl: './first-maps.component.html',
  styleUrls: ['./first-maps.component.scss'],
})
export class FirstMapsComponent  implements OnInit {
map:any;
@ViewChild('map',{read:ElementRef,static:false}) mapRef!:ElementRef;
  constructor() { }
  infoWindows:any=[];
markers:any=[
  {
    title: "Jaipur",
    	
    latitude: "26.907524",
    longitude: "75.739639",
  }
]
  ngOnInit() {}
  //view enter work when page invoke inoic life cycle

  ionViewDidEnter(){
    this.shoeMap();
  }
shoeMap(){
  const location = new google.maps.LatLng(-17.824858,31.053028);
  //no ui controllers
  const options={
    center:location,
    zoom:15,
    disableDefaultUI:true
  }
  this.map = new google.maps.Map(this.mapRef.nativeElement, options);
}
addMarkersToMap(markers:any){
  for(let marker of markers){
let position = new google.maps.LatLng(marker.latitude,marker.longitude);
let mapMarker=new google.maps.Marker({
  position:position,
  title:marker.title,
  latitude:marker.latitude,
  longitude:marker.longitude
})
mapMarker.setMap(this.map);
this.addInfoWindowToMarker(mapMarker);
  }

}
  addInfoWindowToMarker(marker: any) {
    let InfoWindowContent=`<div id="content"> <h2 id="firstHeading" class="firstHeading"> ${marker.title} </h2>    </div>
   
    `
    let infoWindow=new google.maps.infoWindow({
      content:InfoWindowContent
    });
    marker.addListener('click',() =>{
      this.closeAllInfoWindows();
      infoWindow.open(this.map,marker);
    })
    this.infoWindows.push(infoWindow);
  }
  closeAllInfoWindows() {
for(let window of this.infoWindows){
  window.close();
}    
  }




}
