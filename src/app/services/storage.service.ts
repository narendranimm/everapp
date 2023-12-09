import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

export const INTRO_KEY ='intro-slides';
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  create: any;

  // constructor(private _storage:Storage,private router:Router) { }
  // setStorage(key:any,value:any){
  //  return this._storage.set(
  //        key,
  //        value
  //     )
    
  // }
  // getStorage(key:any){
  //   return this._storage.get(key)
  // }
}
