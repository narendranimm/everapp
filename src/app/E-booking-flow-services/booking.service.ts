import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }
  book(data:any):Observable<any>{
    return this.http.post(`http://localhost:8080/api/orders/orderbooking`,data)
  }
}
