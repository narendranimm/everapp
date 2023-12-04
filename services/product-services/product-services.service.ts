import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(private http:HttpClient) { }

  productList():Observable<any>{
    return this.http.get(`http://172.188.80.209:8080/api/product/get`)
  }
  productDetails(taskId:any): Observable<any> {
    return this.http.get(`http://172.188.80.209:8080/api/product/get/${taskId}`)
}
productListBybranchId(taskId:any): Observable<any> {
  return this.http.get(`http://172.188.80.209:8080/api/product/bybranch/${taskId}`)
}
}
