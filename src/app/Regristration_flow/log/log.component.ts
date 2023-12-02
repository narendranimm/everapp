import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ModalOptions } from '@ionic/angular';
import { UserData } from 'src/app/providers/user-data';
import { RegisterService } from 'src/app/registration-services/register.service';

Injectable();
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
  providers:[UserData]
})
export class LogComponent  implements OnInit {

 mobileNumber!:number;
otpForm!:FormGroup;

  constructor(private router: Router,private userdata:UserData,
    private _of:FormBuilder,private modalCtrl:ModalController ,private reg:RegisterService){
    alert( this.userdata.get('mobileno'))
    this.otpForm=this._of.group({
      mobileno:['',[ Validators.required,
        Validators.pattern("^[0-9]*$"),
        ]]
    })
  }
  get mobno(){  
    return this.otpForm.controls;  
  } 
  ngOnInit() {}
nav(){
  this.router.navigate(['/verification'])
}
verifyotp(){
  const data = this.otpForm.value;

  console.log(data)
  this.userdata.setUsername(data.mobileno)
  // this.reg.otp(data).subscribe((res:any)=>{

  // })
      
      
    }

}
