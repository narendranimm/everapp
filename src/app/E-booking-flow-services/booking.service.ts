import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { Observable, from } from 'rxjs';
import{environment} from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseurl:any=environment.apiurl;

  constructor(private http:HttpClient) { 
 
  }

  book(productId:any):Observable<any>{
    return this.http.post(this.baseurl+'orders/orderbooking',productId)
  }
  

  getbikehubs(bikeHubID:any){
    return this.http.get(this.baseurl+`hubs/get/${3503}`,bikeHubID)
  }
  getbattery(batteryStaionID:any){
    return this.http.get(this.baseurl+`hubs/get/3502`,batteryStaionID)
  }
 
}
