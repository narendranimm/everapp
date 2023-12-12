import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

import { ToastController } from '@ionic/angular';
import { IonLoaderService } from 'services/Ionic_Loader/ionic_Loader.service';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
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
  showLoader!: boolean;
  message:any;
  UserID:any;
  duration:any
  constructor(private router: Router,private userdata:UserData,private _snackBar: MatSnackBar,
    public dialog: MatDialog,private snackBar: MatSnackBar,private loaderService:IonLoaderService , public toast: ToastController, private route: ActivatedRoute, private _rf: FormBuilder, private authService: SocialAuthService, private reg: RegisterService, private customValidators: ValidationService) {
    this.userdata.get().then( res => 
      {}
      // console.log(res)
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

  openDialog() {
    const dialogRef = this.dialog.open(CommunicationAllowPermissionComponent,
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);

    });
  }
  registerForm!: FormGroup;
  data:any
  user: any;
  loggedIn: any;
  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(user)
    });

    // this.register();
    // this.getregister();
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });
  }
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
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
    const data = this.registerForm.value;
    if(!this.registerForm.valid) {
      this.registerForm.markAllAsTouched();
      this.snackBar.open(" All fields are required ");
    }
  //   setTimeout(() => {
  //   this.loaderService.display(false);
  // }, 800);
    this.reg.signup(data).subscribe((res: PostResult) => {
      console.log(res)
      this.data = res;
      // this.loaderService.display(true);
    
      this.snackBar.open(JSON.stringify(res.message)
      );
      this.router.navigate(['/login'])
     
    })
    
   
  }
 

 
  // getregister() {
  //   const data = this.registerForm.value
    
  //   this.reg.getsignup(data).subscribe((res: any) => {
  //     this.data = res;
  //     console.log(res)
 
  //   })
  
   
  // }

  submit() {

    if (this.registerForm.valid) {
      // this.showLoader();

    
    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }


}
