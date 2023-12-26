import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { CapacitorHttp,  HttpResponse } from '@capacitor/core';
import { environment } from 'src/environments/environment.prod';
// import { Http } from '@capacitor-community/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 api_key:string=`4d7853a2-965f-11ee-8cbb-0200cd936042`;

baseUrl:any=environment.apiurl;
  constructor(private http:HttpClient) { }
  signup(data:any):Observable<any>{
    return this.http.post(this.baseUrl+`members`,data)
  }
  getsignup(data:any):Observable<any>{
    return this.http.get(this.baseUrl+`members`,data)
  }
  sendsms(data:any):Observable<any>{
    return this.http.post(this.baseUrl+`sendsms`,data)
  }
  resendsms(data:any):Observable<any>{
    return this.http.post(this.baseUrl+`resendsms`,data)
  }
  
  // verifyOTP(otp:string):Observable<any>{
  //   return this.http.post(this.baseUrl+`sendsms`,{otp})
  // }
  signin(data:any):Observable<any>{
    return this.http.post(`https://172.188.80.209:8443/auth/login`,data)
  }
  //dummy
 getProduct(data:any):Observable<any>{
    return this.http.post(`https://api.publicapis.org/entries`,data)
  }
  uploadFile(file: File, userId: string, fileType: string):Observable<any>{
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userid', userId);
    formData.append('filetype', fileType);

    return this.http.post<any>(this.baseUrl+'upload/'+fileType, formData);
  }
  // sendOtp(data:any):Observable<any>{
    
  //   return this.http.post(`https://2factor.in/API/V1/${this.api_key}/SMS/+91${data}/AUTOGEN`,data,this.httpOptions);
  // }

  getbymobileno(mobileno:any){
    return this.http.get(this.baseUrl+`getbymobileno/`+mobileno);
  }
}
