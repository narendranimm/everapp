import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { Observable, from } from 'rxjs';
import{environment} from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})
export class BookingService {
 baseurl=environment.apiurl;

  constructor(private http:HttpClient) { 
    console.log(this.baseurl)
  }

  book(data:any):Observable<any>{
    return this.http.post(this.baseurl+'orders/orderbooking',data)
  }
  
  getbook(data:any):Observable<any>{
    return this.http.get(this.baseurl+'orders/orderbooking',data);
  }
  getbikehubs(bikeHubID:any){
    return this.http.get(this.baseurl+`hubs/get/${3503}`,bikeHubID)
  }
  getbattery(batteryStaionID:any){
    return this.http.get(this.baseurl+`hubs/get/3502`,batteryStaionID)
  }
 
}
