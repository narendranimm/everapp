import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { google } from 'google-maps';
declare var google: { maps: { Geocoder: new () => any; Latlng: new (arg0: number, arg1: number) => any; }; }
@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }
  // geocode(position:{latitude:number,longitude:number}):Observable<any>{
  //  return new Observable<any>(observer=>{
  //     const geocoder =new google.maps.Geocoder()
  //     const latlng =new google.maps.Latlng(position.latitude,position.longitude)
  //     geocoder.geocode({latlng},(result:any,status:any)=>{
  //       console.log(result,status)
  //     })
  //  })
  // }
}
