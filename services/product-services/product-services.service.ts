import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  baseurl:any=environment.apiurl;
  constructor(private http:HttpClient) { }

  productList():Observable<any>{
    return this.http.get( this.baseurl+`product/get`)
  }
  productDetails(taskId:any): Observable<any> {
    return this.http.get(this.baseurl+`product/get/${taskId}`)
}
productListBybranchId(taskId:any): Observable<any> {
  return this.http.get(this.baseurl+`product/bybranch/${taskId}`)
}
}
