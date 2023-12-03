import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

import { ToastController } from '@ionic/angular';
import { IonLoaderService } from 'services/Ionic_Loader/ionic_Loader.service';

import { CommunicationAllowPermissionComponent } from 'src/app/communication-allow-permission/communication-allow-permission.component';
import { UserData } from 'src/app/providers/user-data';
import { PostResult } from 'src/app/registration-models/postresult';
import { RegisterService } from 'src/app/registration-services/register.service';
import { ValidationService } from 'src/app/validationservice/validation.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private userdata:UserData,
    public dialog: MatDialog, public toast: ToastController, private router: Router, private _rf: FormBuilder, private authService: SocialAuthService, private reg: RegisterService, private customValidators: ValidationService) {
    this.userdata.get().then( res => 
      alert(res)
      )
    this.registerForm = this._rf.group({
      FirstName: ['', Validators.compose([Validators.required,])],
      LastName: ['', Validators.compose([Validators.required])],
      EmailID: ['', Validators.compose([Validators.required])],
      country: '+91',
      MobileNo: ['', Validators.compose([Validators.required])],
      DateofBirth: ['', Validators.compose([Validators.required])],
      Password: ['12345', Validators.compose([Validators.required])],
      MemberType: '1000',
      OTP: '146789',
      IsOTPSent: 'true',
      OTPSentDate: '2023-09-06T14:20:44.670Z',
      IsResendOTP: 'true',
      IsEmailVerified: 'true',
      IsOTPVerified: 'true',
      CreatedOn: '2023-09-06T01:50:47.117Z',
      Token: 'null',
      ParentID: '1000',
      IsRegisteredByMobile: 'true',
      userId: 0,
      Gender: 1000
    })
  }
  message: any
  openDialog() {
    const dialogRef = this.dialog.open(CommunicationAllowPermissionComponent,
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

    });
  }
  registerForm!: FormGroup;
  user: any;
  loggedIn: any;
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user)
    });
  }

  // onSubmit(){
  //   if(this.registerForm.valid){
  //  console.log(this.registerForm.value)
  //   }
  // }
  @ViewChild(IonContent) content!: IonContent;

  scrollToBottom() {

    this.content.scrollToBottom(500);
  }

  scrollToTop() {

    this.content.scrollToTop(500);
  }
  register() {
    const data = this.registerForm.value
    alert('')
    this.reg.signup(data).subscribe((res: PostResult) => {
      console.log(res)
      if (res.status) {
        // this.hideLoader();

        this.message = res.message
        this.showToast();

      } else {
        // this.hideLoader();

        this.message = res.message
        this.showToast();
      }

    })
  }

  submit() {

    if (this.registerForm.valid) {
      // this.showLoader();

      this.register();
    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }
  // showLoader() {
  //   this.ionLoaderService.simpleLoader();
  // }
  // hideLoader() {
  //   this.ionLoaderService.dismissLoader();
  // }
  showToast() {
    this.toast.create({

      message: this.message,
    }).then((toastData) => {
      console.log(toastData);
      toastData.present();
    });
  }
}
