import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/providers/user-data';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent  implements OnInit {
  userid:any
  constructor(public router:Router,private localdata:UserData) { 
    // setTimeout(()=>{
    //   this.router.navigateByUrl('get')
    // },2000)
    this.localdata.getuser().then((res:any) => {
      if (res !== null) {
        this.userid = res.UserID;
        if(this.userid){
         this.router.navigate(['/enableloaction']);
        }
        else{
           this.router.navigate(['/get'])

        }
      }
      else{
setTimeout(()=>{
      this.router.navigateByUrl('get')
    },2000)
      }
      
  
    })
  }

  ngOnInit() {
    
  }
  
 

}
