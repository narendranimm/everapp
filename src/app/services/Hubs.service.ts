import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { CapacitorHttp,  HttpResponse } from '@capacitor/core';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn:'root'
})
export class HubsService {

baseUrl:any=environment.apiurl;
  constructor(private http:HttpClient) { 

    
  }
 

 
  

  getnearByHubsBasedonLatandLongID(payload:any){
    return this.http.post(this.baseUrl+`hubs/getnearByHubsList`,payload);
  }
  getnearByHubsBasedonLatandLongIDSearch(payload:any){
    return this.http.post(this.baseUrl+`hubs/getnearByHubsListSearch`,payload);
  }
}
