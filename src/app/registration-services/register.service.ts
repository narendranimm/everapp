import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http:HttpClient) { }
  signup(data:any):Observable<any>{
    return this.http.post(`http://localhost:8080/api/members`,data)
  }
  otp(data:any):Observable<any>{
    return this.http.post(`http://localhost:8080/api/sendsms`,data)
  }
  
  verifyOTP(otp:string):Observable<any>{
    return this.http.post(`http://localhost:8080/api/sendsms`,{otp})
  }
  signin(data:any):Observable<any>{
    return this.http.post(`http://localhost:8080/auth/login`,data)
  }
  getProfile():Observable<any>{
    const headers ={
       'Authorization': "Bearer " + localStorage.getItem('token')
    }
    
    return this.http.get(`http://localhost:8080/auth/profile`,{headers:headers})
  }
  logout(){
   localStorage.clear();
  }
}
