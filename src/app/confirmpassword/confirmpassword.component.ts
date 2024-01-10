import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../registration-services/register.service';
import { LoadingService } from '../services/loading.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserData } from '../providers/user-data';

@Component({
  selector: 'app-confirmpassword',
  templateUrl: './confirmpassword.component.html',
  styleUrls: ['./confirmpassword.component.scss'],
})
export class ConfirmpasswordComponent  implements OnInit {
  showLoader!: boolean;
  UserOTP = '';
  logindata: any;
  userid: any;
  fst: any;
  scn: any;
  thrd: any;
  fth: any;
  otp: any;
  message!: string;
  isModalOpen: boolean=false;
  constructor(private reg: RegisterService, private loadingservice: LoadingService, 
  private register: RegisterService, private snackBar: MatSnackBar,
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
      this.fst=digits[0];
      this.scn=digits[1];
      this.thrd=digits[2];
      this.fth=digits[3];
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



  verifyOTP(isOpen:boolean) {
    this.isModalOpen = isOpen;
    const otpString = `${this.fst}${this.scn}${this.thrd}${this.fth}`;
  

    if (this.UserOTP == otpString) {
alert('')
    //   this.dialog.open(CongratulationsComponent, {
    //     width: '280px',
    //     height: '217px'
    //   });
    //   setTimeout(() => {
    //     this.dialog.closeAll()
    //  }, 3000)

    }
  }



 
 
}
