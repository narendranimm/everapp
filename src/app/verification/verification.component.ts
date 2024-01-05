import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../registration-services/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserData } from '../providers/user-data';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { CongratulationsComponent } from '../congratulations/congratulations.component';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss'],
})
export class VerificationComponent implements OnInit {
  showLoader!: boolean;
  otp = '';
  isDisabled: boolean = true;
  verficationForm!: FormGroup;
  logindata: any;
  mobileno: any;
  constructor(private reg: RegisterService, private loadingservice: LoadingService,public dialog: MatDialog,
    private _vf: FormBuilder, private router: Router, private register: RegisterService, private snackBar: MatSnackBar, private userdata: UserData) {
    this.verficationForm = this._vf.group({
      firstdigit: ['', Validators.required],
      seconddigit: ['', Validators.required],
      thirddigit: ['', Validators.required],
      fourthdigit: ['', Validators.required],
      fifthdigit: ['', Validators.required],
      sixthdigit: ['', Validators.required]

    })
    this.userdata.getuser().then(res => {
      this.logindata = res;
      this.mobileno = this.logindata.MobileNo;
      console.log(this.mobileno)

    })
  }
  btndisabled = false;

  ngOnInit() {
    this.btndisabled = true;

  }

  otpController(event: any, next: any, prev: any): any {
    if (event.target.value.length < 1 && prev) {
      prev.setFocus()
    }
    else if (next && event.target.value.length > 0) {
      next.setFocus();
    }
    else {
      return 0;
    }


  }


  onInputChange(event: any) {
    this.otp = event;
    console.log(this.otp)
  }



  verifyOTP() {
    const otp = this.verficationForm?.value;
    //  setTimeout(() => {
    //   this.loaderService.display(false);
    // }, 800);
    const otpString = `${otp.firstdigit}${otp.seconddigit}${otp.thirddigit}${otp.fourthdigit}${otp.fifthdigit}${otp.sixthdigit}`;
    console.log('OTP to verify', otpString);

    //  console.log(this.logindata.OTP == otpString)
    if (this.logindata.OTP == otpString) {
      this.dialog.open(CongratulationsComponent);
      this.router.navigate(['/enableloaction'])
    } else {
      this.snackBar.open("invalid otp");
      this.router.navigate(['/verification'])
    
    }



  }


  generateOTP(): string {
    // Generate a random 6-digit number
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    return otp;
  }
  //resend otp
  resend() {
    let data = {
      "mobileno": this.mobileno,
      "otp": "2422"
    }
    data.otp = this.generateOTP();
    this.loadingservice.simpleLoader('Loading..')
    this.reg.resendsms(data).subscribe(
      (res: any) => {
     
      console.log(res)
      if (res.status) {
        this.loadingservice.dismissLoader();
        let message: string = res.message;
        console.log(message);
       
        this.snackBar.open(message);
      }
      else {
        this.loadingservice.dismissLoader();
    
      

      }
    })
  }
}


