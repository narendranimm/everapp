import { HttpClient } from '@angular/common/http';
import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ModalOptions } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IonLoaderService } from 'services/Ionic_Loader/ionic_Loader.service';
import { UserData } from 'src/app/providers/user-data';
import { RegisterService } from 'src/app/registration-services/register.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
  providers:[UserData]
})
export class LogComponent  implements OnInit {
  OTP='6281208432';

otpForm!:FormGroup;
taskId:any;
showLoader!: boolean;
logindata:any
no=''



  constructor(private router: Router,private route:ActivatedRoute,private userdata:UserData,private snackBar: MatSnackBar,private loaderService:IonLoaderService ,
    private _of:FormBuilder,private modalCtrl:ModalController ,private reg:RegisterService,private http:HttpClient){
      this.taskId = route.snapshot.params["ID"];
      console.log("this is taskId value = "+ this.taskId);
    
    this.otpForm=this._of.group({
      mobileno:['',[ Validators.required,
        Validators.pattern("^[0-9]*$"),
        ]]
    })
    this.userdata.getuser().then(res=>{
      this.logindata=res;
      
    })
  }
  get mobno(){  
    return this.otpForm.controls;  
  } 
  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
    this.getuserbymobileno();
  }
nav(){
  this.router.navigate(['/verification'])
}


verifyotp(){
  //need to handle error
  //1. if otp failed
  //2.if network issue.
  const data = this.otpForm.value;
 
  console.log(data)
  this.userdata.set(data.mobileno)
  this.reg.otp(data).subscribe((res:any)=>{
//if verfied success then save mobileno to localstoragte.
//after logged in success moved to home page
// this.loaderService.display(true);
    console.log(res)
    this.getuserbymobileno();
    this.snackBar.open(JSON.stringify(res.message));
    this.router.navigate(['/verification'])
    if(res.status){
 
   
    }
    })
  }
// verifyotp(){
//   //need to handle error 
//   //1. if otp failed
//   //2.if network issue.
//   const Mobileno = this.otpForm?.value;
//   if(!this.otpForm.valid) {
//     this.otpForm.markAllAsTouched();
//   }

//   const otpString=`${Mobileno.mobileno}`;
//   console.log('OTP to verify',otpString);

//  //  console.log(this.logindata.OTP == otpString)
// if(otpString == this.OTP ){

//     // if(this.no == this.MobileNumber){
     
//       this.router.navigate(['/verification'])
//       this.snackBar.open("OTP sent successfully");
//     }else{
    
//       this.router.navigate(['/login'])
//       this.snackBar.open("mobile no incorrect");
//     }
  
//     // })
//   }
getuserbymobileno(){
  this.reg.getbymobileno(this.otpForm.value.mobileno).subscribe(
    res=>{
      console.log(res)
      this.userdata.setMain("loginuser",res)
    }
  )
}

}
