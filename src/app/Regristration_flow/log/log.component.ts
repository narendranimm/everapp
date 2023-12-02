import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalController, ModalOptions } from '@ionic/angular';
import { RegisterService } from 'src/app/registration-services/register.service';



@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent  implements OnInit {

 mobileNumber!:number;
otpForm!:FormGroup;

  constructor(private router: Router,private _of:FormBuilder,private modalCtrl:ModalController ,private reg:RegisterService){
   
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
register(){
  const data = this.otpForm.value;
  this.reg.otp(data).subscribe((res:any)=>{

  })
      
      
    }

}
