import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }
  book(data:any):Observable<any>{
    return this.http.post(`http://172.188.80.209:8080/api/orders/orderbooking`,data)
  }

  getbikehubs(bikeHubID:any){
    return this.http.get(`http://172.188.80.209:8080/api/hubs/get/${3503}`,bikeHubID)
  }
  getbattery(batteryStaionID:any){
    return this.http.get('http://172.188.80.209:8080/api/hubs/get/3502',batteryStaionID)
  }
}
