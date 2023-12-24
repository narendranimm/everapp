import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { CapacitorHttp,  HttpResponse } from '@capacitor/core';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn:'root'
})
export class OrderService {

baseUrl:any=environment.apiurl;
  constructor(private http:HttpClient) { 

    
  }
 

  getorderbyUserID(userid:any){
    return this.http.get(this.baseUrl+`orders/getorderbyUserid/`+userid);
  }
  getordersummeryByBookingNo(orderdata:any){
    return this.http.post(this.baseUrl+`orders/getordersummeryByBookingNo`,orderdata);
  }
}
