import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../registration-services/register.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent  implements OnInit {

  otp='';
  

  verficationForm!:FormGroup;
  constructor(private _vf:FormBuilder,private register:RegisterService) { 
    this.verficationForm= this._vf.group({
    firstdigit:['',Validators.required],
    seconddigit:['',Validators.required],
    thirddigit:['',Validators.required],
    fourthdigit:['',Validators.required],
    fifthdigit:['',Validators.required],
    sixthdigit:['',Validators.required]

     


    })
  }
  btndisabled = false;

  ngOnInit() { this.btndisabled =true;}
 
  otpController(event:any,next:any,prev:any):any{
    if(event.target.value.length < 1 && prev){
      prev.setFocus()
    }
    else if(next && event.target.value.length>0){
      next.setFocus();
    }
    else {
     return 0;
    }
   
    
  }
  
  onSubmit(){
    const otp=this.verficationForm?.value;
    this.register.verifyOTP(otp).subscribe(
      (res) => {
        console.log('OTP verfication response',res);
        
      })
  }
  onInputChange(event:any){
   this.otp=event;
   console.log(this.otp)
  }
  
  

  verifyOTP():void {
       const otp=this.verficationForm?.value;
       const otpString=`${otp.firstdigit}${otp.seconddigit}${otp.thirddigit}${otp.fourthdigit}${otp.fifthdigit}${otp.sixthdigit}`;
       console.log('OTP to verify',otpString);
       this.register.verifyOTP(otpString).subscribe(
        (res) => {
          console.log('OTP verfication response',res);
          
        }
       )
  }



}
