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

otpForm!:FormGroup;
taskId:any;
showLoader!: boolean;
logindata:any
userdatabyno:any
userID:any;
ID:any;
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
  }
nav(){
  this.router.navigate(['/verification'])
}


async verifyotp(){
  //need to handle error
  //1. if otp failed
  //2.if network issue.
  const data = this.otpForm.value;
 
  let datad= await this.getuserbymobileno()
  .then((data: any) => {
    this.userdatabyno=data;
    this.userdata.setMain("loginuser",data)
  console.log('Data received:', data);
 
});
  console.log(datad)
  if(this.userdatabyno){
    data.otp=this.userdatabyno.OTP
  }
  this.userdata.set(data.mobileno)
  this.reg.sendsms(data).subscribe((res:any)=>{
//if verfied success then savec mobileno to localstoragte.
//after logged in success moved to home page
// this.loaderService.display(true);
    console.log(res)
    if(res.status){
      this.snackBar.open(JSON.stringify(res.message));
      this.router.navigate(['/verification'])   
    }
    else{
      this.snackBar.open(JSON.stringify(res.message));

    }
    })
  }
//  mobileotp(){
//     //need to handle error
//     //1. if otp failed
//     //2.if network issue.
//     const data = this.otpForm.value;
//     if(!this.otpForm.valid) {
//       this.otpForm.markAllAsTouched();
//       this.snackBar.open(" All fields are required ");
//       this.router.navigate(['/login']) 
//     }else{
//       this.snackBar.open(" Otp sent successfully ");
//       this.router.navigate(['/verification'])  
//     }

//     }
getuserbymobileno():Promise<any>{
 return this.reg.getbymobileno(this.otpForm.value.mobileno).toPromise()}


}