import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  uploadfile: any;
  profilepic: any;
  uploadFile(file: any, arg1: string, fileName: any) {
    throw new Error('Method not implemented.');
  }
  mobile(data: any) {
    throw new Error('Method not implemented.');
  }



  constructor(private http:HttpClient) { }
    signup(data:any):Observable<any>{
      return this.http.post(`http://localhost:8080/auth/register`,data)
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
