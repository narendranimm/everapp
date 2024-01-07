import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../registration-services/register.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserData } from '../providers/user-data';
import { Router } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { CongratulationsComponent } from '../congratulations/congratulations.component';
import { Plugins } from '@capacitor/core';
const { Clipboard } = Plugins;
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
      fst: ['', Validators.required],
      scn: ['', Validators.required],
      thrd: ['', Validators.required],
      fth: ['', Validators.required],
      fifth: ['', Validators.required],
      sth: ['', Validators.required]

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
  async copyToClipboard(text: string) {
    await Clipboard.write({
      string: text,
    });
    alert(text);
  }
  otpController(event: any, next: any, prev: any): any {
    console.log(event.target.value.length)
    if(event.target.value.length ==6){
      const digits: number[] = event.target.value.split('').map(Number);
      this.verficationForm.controls.fst.setValue(digits[0]);
      this.verficationForm.controls.scn.setValue(digits[1]);
      this.verficationForm.controls.thrd.setValue(digits[2]);
      this.verficationForm.controls.fth.setValue(digits[3]);
      this.verficationForm.controls.fifth.setValue(digits[4]);
      this.verficationForm.controls.sth.setValue(digits[5]);
    // console.log(`Individual digits: ${digits.join(', ')}`);
    }
    if (event.target.value.length < 1 && prev) {
      prev?.setFocus()
    }
    else if (next && event.target.value.length > 0) {
      next?.setFocus();
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
  
    const otpString = `${otp.fst}${otp.scn}${otp.thrd}${otp.fth}${otp.fifth}${otp.sth}`;
    console.log('OTP to verify', otpString);

    //  console.log(this.logindata.OTP == otpString)
    if (this.logindata.OTP == otpString) {
      this.dialog.open(CongratulationsComponent,{
        width:'280px',
        height:'217px'
      });
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


