import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserData } from '../providers/user-data';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  mobileno:any='000';
  istrue:boolean=false;
  constructor(private auth: UserData,private router:Router) {

   

  }
  canActivate(): boolean {
    //need to write promises //praveen

    this.auth.get().then( 
      res =>{
        console.log(res)
        //this condition for null
        if(res)
        {
              this.mobileno=res;
              //  console.log('tet',res.length)
              //  console.log('tet',this.mobileno)
              if (this.mobileno.length !=10) {
                this.router.navigate(['/login']);
                this.istrue=true;
              }else{
                this.istrue=true;
                this.router.navigate(['/homepage']);
              }
        }else{
          this.router.navigate(['/login']);
        }
      
    }
    );
    return this.istrue
  }
    //here mobileno length 10
}
