import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


let S_KEY='mylist';


@Injectable({
    providedIn: 'root'
  })
  export class UserData {
  constructor( public _storage: Storage) {
    this.init();
  }
async init(){
    this._storage.create();
}
public  get(){
    return this._storage.get(S_KEY)     
}
set(mobileno:any) {   
    return this._storage.set(S_KEY,mobileno);
  }
setMain(key:any,data:any) {   
    return this._storage.set(key,data);
  }
  setpId(mobileno:any) {   
    return this._storage.set('pId',mobileno);
  }
  setmId(mobileno:any) {   
    return this._storage.set('mId',mobileno);
  }
  setbId(mobileno:any) {   
    return this._storage.set('bId',mobileno);
  }
  getuser(){
   return this._storage.get("loginuser")
  }
  getusername(){
   this._storage.get("loginuser").then(res=>{
     console.log(res)
    return (res.FirstName + res.LastName);

   })
  }
  public  getId(Id:any){
    return this._storage.get(Id)     
}
public  getbId(Id:any){
  return this._storage.get(Id)     
}



//   logout() {
//     this.storage.remove(this.HAS_LOGGED_IN);
//     this.storage.remove('username');
//   }

//   setUsername(username:any) {
//     this.storage.set('username', username);
//   }

//   getUsername() {
//     return this.storage.get('username').then((value) => {
//       return value;
//     });
//   }

  // return a promise
//   hasLoggedIn() {
//     return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
//       return value === true;
//     });
//   }
}