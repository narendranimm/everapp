import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root' // HERE
  })
export class UserData {
  HAS_LOGGED_IN = 'hasLoggedIn';
private _storage:Storage | null=null;
  constructor( public storage: Storage) {
    this.init();
  }
async init(){
    const storage =await this.storage.create();
    this._storage=storage;
}
public  set(key:string,value:any){
    let result= this._storage?.set(key,value);
    console.log(result)
}
public  get(key:string){
    let value = this._storage?.get(key)
    return value;
}
  login(username:any) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.setUsername(username);
  }

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('username');
  }

  setUsername(username:any) {
    this.storage.set('username', username);
  }

  getUsername() {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

  // return a promise
  hasLoggedIn() {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }
}