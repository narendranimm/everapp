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

  extendOrderplan(orderdata:any):Observable<any>{
    return this.http.post(this.baseurl+'orders/extendCurrentOrder',orderdata)
  }
  
  getPriceData() {
    return this.http.get(this.baseurl+'product/getPriceData')
  }
  getbranchesByBID(bikeHubID:any,name:any){
   let data= {
      "branchtypeID":10,
      "branchname": 'NULL'
  }
  data.branchname=name;
  data.branchtypeID=bikeHubID;
    return this.http.post(this.baseurl+`hubs/get`,data)
  }
  
  getBikesByBranchID(branchID:number){
    return this.http.get(this.baseurl+`product/bybranch/${branchID}`)   
  }
  getHubDetaislByHubID(branchID:number){
    return this.http.get(this.baseurl+`hubs/gethubdetails/${branchID}`)
  }
 
}
