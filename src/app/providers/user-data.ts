import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


let S_KEY='mylist';


@Injectable({
    providedIn: 'root'
  })
  export class UserData {
  userID: any;
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
setNew(key:any,data:any) {   
    return this._storage.set(key,data);
  }
  setpId(prodictid:any) {   
    return this._storage.set('pId',prodictid);
  }
  setmId(memeberid:any) {   
    return this._storage.set('mId',memeberid);
  }
  setbId(branchID:any) {   
    return this._storage.set('bId',branchID);
  }
  getuser(){
   return this._storage.get("loginuser")
  }
  getUserID(): Promise<any> {
    return this._storage.get("loginuser").then(res => {
      return res.UserID;
    });
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
public  clear(){
  return this._storage.clear()     
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