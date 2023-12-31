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

  getAlloffers(){
    return this.http.get(this.baseUrl+`admin/offers/getall`);
  }
  getordersummeryByBookingNo(bookingNo:string){
  let  bookingdata = {
      "BookingNo": bookingNo
    }
    return this.http.post(this.baseUrl+`orders/getordersummeryByBookingNo`,bookingdata);
  }
}
