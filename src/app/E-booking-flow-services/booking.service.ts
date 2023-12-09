import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {


  constructor(private http:HttpClient) { }

  book(data:any):Observable<any>{
    return this.http.post(`https://172.188.80.209:8443/api/orders/orderbooking`,data)
  }
  
  getbook(data:any):Observable<any>{
    return this.http.get(`https://172.188.80.209:8443/api/orders/orderbooking`,data)
  }
  getbikehubs(bikeHubID:any){
    return this.http.get(`https://172.188.80.209:8443/api/hubs/get/${3503}`,bikeHubID)
  }
  getbattery(batteryStaionID:any){
    return this.http.get('https://172.188.80.209:8443/api/hubs/get/3502',batteryStaionID)
  }
 
}
