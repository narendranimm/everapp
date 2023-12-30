import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

import { ToastController } from '@ionic/angular';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { CommunicationAllowPermissionComponent } from 'src/app/communication-allow-permission/communication-allow-permission.component';
import { UserData } from 'src/app/providers/user-data';
import { PostResult } from 'src/app/registration-models/postresult';
import { RegisterService } from 'src/app/registration-services/register.service';
import { ValidationService } from 'src/app/validationservice/validation.service';
import { LoadingService } from 'src/app/services/loading.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  showLoader!: boolean;
  message:any;
  UserID:any;
  duration:any;

  maxDate!: Date;
  date!: Date;
  constructor(private loadingservice: LoadingService,
    private router: Router,private userdata:UserData,private _snackBar: MatSnackBar,
    public dialog: MatDialog,private snackBar: MatSnackBar, public toast: ToastController, private route: ActivatedRoute, 
    private _rf: FormBuilder, private reg: RegisterService, 
    private customValidators: ValidationService) {
    this.userdata.get().then( res => 
      {}
      // console.log(res)
      )
    this.regForm = this._rf.group({
      FirstName: ['', Validators.compose([Validators.required,])],
      LastName: ['', Validators.compose([Validators.required])],
      EmailID: ['', Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),Validators.email])],
      country: '+91',
      MobileNo: ['', [Validators.required,Validators.pattern("[0-9 ]{10}")]],
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
      ProfilePhoto:"test.png",
      userId: 0,
      Gender: 1000
    })
    this.maxDate = new Date();
    this.maxDate.setMonth(this.maxDate.getMonth() - 12 * 18);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CommunicationAllowPermissionComponent,
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

    });
  }
  regForm!: FormGroup;
  data:any
  user: any;
  loggedIn: any;
  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setMonth(this.maxDate.getMonth() - 12 * 18);

   
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
  register() {
    this.loadingservice.simpleLoader('Loading')
    // this.regForm.value.ProfilePhoto.s
    const picname = this.regForm.get('FirstName')!.value +'_'+ this.regForm.get('LastName')!.value;
    this.regForm.controls.ProfilePhoto.setValue(picname);
    const data = this.regForm.value;
    if(!this.regForm.valid) {
      setTimeout(() => {
        this.loadingservice.dismissLoader();
      }, 1000);

      this.regForm.markAllAsTouched();
      this.snackBar.open(" All fields are required ");
      return;
    }
 
    this.reg.signup(data).subscribe(
      (res: PostResult) => {
        if(res.status == 'true'){
          this.loadingservice.dismissLoader();
          console.log(res)
          this.data = res;
          this.snackBar.open(res.message.toString());
          this.router.navigate(['/login'])
        }else{
          this.loadingservice.dismissLoader();

          this.snackBar.open(JSON.stringify(res.message));

          
        }
     
    })
    
   
  }
 

 
 
  submit() {

    if (this.regForm.valid) {
      // this.showLoader();

    
    }
    else {
      this.regForm.markAllAsTouched();
    }
  }


    
}
