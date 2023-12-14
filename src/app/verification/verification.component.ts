import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../registration-services/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IonLoaderService } from 'services/Ionic_Loader/ionic_Loader.service';
import { UserData } from '../providers/user-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent  implements OnInit {
  showLoader!: boolean;
  otp='';

  verficationForm!:FormGroup;
  logindata: any;
  constructor(private _vf:FormBuilder,private router:Router,private register:RegisterService,private snackBar: MatSnackBar,private loaderService:IonLoaderService,private userdata:UserData) { 
    this.verficationForm= this._vf.group({
    firstdigit:['',Validators.required],
    seconddigit:['',Validators.required],
    thirddigit:['',Validators.required],
    fourthdigit:['',Validators.required],
    fifthdigit:['',Validators.required],
    sixthdigit:['',Validators.required]

    })
    this.userdata.getuser().then(res=>{
      this.logindata=res;
       console.log(this.logindata)
     
    })
  }
  btndisabled = false;

  ngOnInit() { this.btndisabled =true;
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    })
  }
 
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
  
  // onSubmit(){
  //   const otp=this.verficationForm?.value;
  //   // this.register.verifyOTP(otp).subscribe(
  //   //   (res) => {
  //   //     console.log('OTP verfication response',res);
        
  //   //   })
  // }
  onInputChange(event:any){
   this.otp=event;
   console.log(this.otp)
  }
  
  

  verifyOTP(){
       const otp=this.verficationForm?.value;
      //  setTimeout(() => {
      //   this.loaderService.display(false);
      // }, 800);
       const otpString=`${otp.firstdigit}${otp.seconddigit}${otp.thirddigit}${otp.fourthdigit}${otp.fifthdigit}${otp.sixthdigit}`;
       console.log('OTP to verify',otpString);
      
      //  console.log(this.logindata.OTP == otpString)
     if(otpString == this.logindata.OTP ){
      this.snackBar.open("otp verified successfully");
      this.router.navigate(['/adhar'])
     }else{
      this.snackBar.open("invalid otp");
      this.router.navigate(['/verification'])
     }
        
   
  
  }



}
