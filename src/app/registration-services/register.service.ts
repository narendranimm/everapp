import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { CapacitorHttp,  HttpResponse } from '@capacitor/core';
import { Http } from '@capacitor-community/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 api_key:string=`4d7853a2-965f-11ee-8cbb-0200cd936042`;
 httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};
  constructor(private http:HttpClient) { }
  signup(data:any):Observable<any>{
    return this.http.post(`https://172.188.80.209:8443/api/members`,data)
  }
  getsignup(data:any):Observable<any>{
    return this.http.get(`https://172.188.80.209:8443/api/members`,data)
  }
  otp(data:any):Observable<any>{
    return this.http.post(`https://172.188.80.209:8443/api/sendsms`,data)
  }
  
  verifyOTP(otp:string):Observable<any>{
    return this.http.post(`https://172.188.80.209:8443/api/sendsms`,{otp})
  }
  signin(data:any):Observable<any>{
    return this.http.post(`https://172.188.80.209:8443/auth/login`,data)
  }
 getProduct(data:any):Observable<any>{
    return this.http.post(`https://api.publicapis.org/entries`,data)
  }
  uploadFile(file: File, userId: string, fileType: string):Observable<any>{
    const formData = new FormData();
    formData.append('file', file, file.name);
    formData.append('userid', userId);
    formData.append('filetype', fileType);

    return this.http.post<any>('https://172.188.80.209:8443/api/upload/'+fileType, formData,this.httpOptions);
  }
  // sendOtp(data:any):Observable<any>{
    
  //   return this.http.post(`https://2factor.in/API/V1/${this.api_key}/SMS/+91${data}/AUTOGEN`,data,this.httpOptions);
  // }

  profilepic(data:any):Observable<any>{
  return this.http.post(`https://172.188.80.209:8443/api/members`,data)
}
}
