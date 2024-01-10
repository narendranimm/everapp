import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../registration-services/register.service';
import { LoadingService } from '../services/loading.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserData } from '../providers/user-data';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { CongratulationsComponent } from '../congratulations/congratulations.component';
import { SnackbarService } from '../snackbar.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
})
export class SecurityComponent implements OnInit {
  showLoader!: boolean;
  UserOTP = '';
  isDisabled: boolean = true;
  verficationForm!: FormGroup;
  logindata: any;
  userid: any;
  fst: any;
  scn: any;
  thrd: any;
  fth: any;
  vfst: any;
  vscn: any;
  vthrd: any;
  vfth: any;
  @ViewChild(IonModal) modal!: IonModal;
  otp: any;
  message!: string;
  isModalOpen: boolean = false;
  firstotpString: any;
  constructor(private reg: RegisterService, private loadingservice: LoadingService, public dialog: MatDialog,
    private router: Router, private register: RegisterService, private snackBar: SnackbarService,
    private userdata: UserData) {

    this.userdata.getuser().then(res => {
      if (res !== null) {
        // this.logindata = res;

        this.userid = res.UserID;
      } else {
      }

    })
  }
  btndisabled = false;

  ngOnInit() {
    this.btndisabled = true;

  }

  otpController(event: any, next: any, prev: any): any {
    console.log(event.target.value.length)
    if (event.target.value.length == 6) {
      const digits: number[] = event.target.value.split('').map(Number);
      this.fst = digits[0];
      this.scn = digits[1];
      this.thrd = digits[2];
      this.fth = digits[3];
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
  }
  async setUserdetails() {


  }



  verifyOTP(isOpen: boolean) {
    this.isModalOpen = isOpen;
    this.firstotpString = `${this.fst}${this.scn}${this.thrd}${this.fth}`;
    // console.log(otpString)


    //  console.log(this.logindata.OTP == otpString)
    // if (this.UserOTP == otpString) {

    //   this.dialog.open(CongratulationsComponent, {
    //     width: '280px',
    //     height: '217px'
    //   });
    //   setTimeout(() => {
    //     this.dialog.closeAll()
    //  }, 3000)


  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  // confirm() {
  //   this.modal.dismiss(this.otp, 'confirm');
  // }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }


  confirmpassword() {
    this.loadingservice.simpleLoader('Loading...')
    const otpString = `${this.vfst}${this.vscn}${this.vthrd}${this.vfth}`;
    if (this.firstotpString == otpString) {
      this.reg.setUserPin(this.userid, otpString).subscribe((res: any) => {
        console.log(res)
        if (res.Status == 'true') {
          this.cancel();
          this.isModalOpen = false;
          this.loadingservice.dismissLoader();
          this.router.navigateByUrl('/setting');
          this.snackBar.presentSnackbar('Saved Successfully!! ', 1000, 'bottom', 'success');

        }
      })
    } else {
      this.loadingservice.dismissLoader();

      this.snackBar.presentSnackbar('Verification failed', 1000, 'bottom', 'danger')

    }

  }

}



