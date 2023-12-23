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

  book(orderdata:any):Observable<any>{
    return this.http.post(this.baseurl+'orders/orderbooking',orderdata)
  }
  

  getbikehubs(bikeHubID:any){
    return this.http.get(this.baseurl+`hubs/get/${bikeHubID}`)
  }
  getbattery(batteryStaionID:any){
    return this.http.get(this.baseurl+`hubs/get/${batteryStaionID}`)
  }
  getBikesByBranchID(branchID:number){
    return this.http.get(this.baseurl+`product/bybranch/${branchID}`)   
  }
  getHubDetaislByHubID(branchID:number){
    return this.http.get(this.baseurl+`hubs/gethubdetails/${branchID}`)
  }
 
}
