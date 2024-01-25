import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

import { ToastController } from '@ionic/angular';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CommunicationAllowPermissionComponent } from 'src/app/communication-allow-permission/communication-allow-permission.component';
import { UserData } from 'src/app/providers/user-data';
import { PostResult } from 'src/app/registration-models/postresult';
import { RegisterService } from 'src/app/registration-services/register.service';
import { ValidationService } from 'src/app/validationservice/validation.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ValidateUrl } from './age.validator';
import { SnackbarService } from 'src/app/snackbar.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  showLoader!: boolean;
  message: any;
  UserID: any;
  duration: any;
  maxDate!: Date;
  date!: Date;
  readonly minAge = 18;
  submitted = false;
  genderdata:any=[
    {"name":'Select',"value":0},
    {"name":'Male',"value":3500},
    {"name":'Female',"value":3500},
    {"name":'Prefer not say',"value":1},
  ]

  constructor(private loadingservice: LoadingService, private snackbarService: SnackbarService,
    private router: Router, private userdata: UserData, private _snackBar: MatSnackBar,
    public dialog: MatDialog, private snackBar: MatSnackBar, public toast: ToastController, private route: ActivatedRoute,
    private _rf: FormBuilder, private reg: RegisterService,
    private customValidators: ValidationService) {


    this.regForm = this._rf.group({
      FirstName: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z \-\']+')])],
      LastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]],
      EmailID: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'), Validators.email])],
      country: '+91',
      MobileNo: ['', [Validators.required, this.mobileNumberValidator]],
      DateofBirth: ['', [Validators.compose([Validators.required]), ValidateUrl]],
      Password: ['12345', Validators.compose([Validators.required])],
      MemberType: "0",
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
      ProfilePhoto: null,
      userId: 0,
      Gender: 1000
    })

    
  }

  get f() { return this.regForm.controls; }

  openDialog() {
    const dialogRef = this.dialog.open(CommunicationAllowPermissionComponent,
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

    });
  }
  regForm!: FormGroup;
  data: any
  user: any;
  loggedIn: any;
  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setMonth(this.maxDate.getMonth() - 12 * 18);


  }

  mobileNumberValidator(control:any) {
  const isValid =/^\d{10}$/.test(control.value);  
 
  return isValid ? null : {invalidMobile: true };
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  // onSubmit(){
  //   if(this.regForm.valid){
  //  console.log(this.regForm.value)
  //   }
  // }
  @ViewChild(IonContent) content!: IonContent;

  scrollToBottom() {

    this.content.scrollToBottom(500);
  }

  scrollToTop() {

    this.content.scrollToTop(500);
  }
  isChecked: boolean = false;

  onChange(event: any) {
    this.isChecked = true;
  }
  register() {
    
    if (!this.isChecked) {
      this.snackBar.open('Please select terms and conditions')
      return
    }
    if (!this.regForm.valid) {

      this.regForm.markAllAsTouched();
      this.snackBar.open(" All fields are required ");
      return;
    }
    this.loadingservice.present('Loading')
    const picname = this.regForm.get('FirstName')!.value + '_' + this.regForm.get('LastName')!.value;
    this.regForm.controls.ProfilePhoto.setValue(picname);
    this.regForm.value.MobileNo = (this.regForm.value.MobileNo).toString()
    const data = this.regForm.value;

    this.reg.signup(data).subscribe(
      (res: PostResult) => {
        if (res) {

          if (res.status == 'true') {
            this.loadingservice.dismissLoader();
            console.log(res)
            this.data = res;
            this.snackBar.open(res.message.toString());
            this.snackbarService.presentSnackbar(res.message, 1000, 'bottom', 'success')

            this.router.navigate(['/login'])
          } else {
            this.loadingservice.dismissLoader();

            this.snackbarService.presentSnackbar(res.message, 1000, 'bottom', 'danger')



          }
        } else {
          this.loadingservice.dismissLoader();

        }

      }, (error) => {
        this.loadingservice.dismissLoader();

      }
    )


  }



  submit() {

    if (this.regForm.valid) {
      // this.showLoader();


    }
    else {
      this.regForm.markAllAsTouched();
    }
  }

  setInterval(lastCharRemove: any) {

const  original = (document.getElementById("displayResult")  as HTMLFormElement).Value;

  if (original?.length > 10) {
   lastCharRemove =
      original.slice(0, original.length - 1);
     lastCharRemove =  (document.getElementById("displayResult")  as HTMLFormElement).Value

  }
}

  
}
