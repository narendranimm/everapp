import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode, MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { BookingService } from '../E-booking-flow-services/booking.service';
import { UserData } from '../providers/user-data';
import { DataservicesService } from '../dataservices.service';
import { LoadingService } from '../services/loading.service';
import { IonContent, ModalController } from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { map } from 'rxjs';
import { RegisterService } from '../registration-services/register.service';
import { LoaderService } from '../loader.service';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-kycstatus',
  templateUrl: './kycstatus.component.html',
  styleUrls: ['./kycstatus.component.scss'],
})
export class KycstatusComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 100;
  MemberID: any;


  constructor(private http:HttpClient,

    private bookingservice: BookingService,private router:Router,private gajender:RegisterService,private progress:LoaderService,
    private user: UserData,) {
  }

  price: number = 10
  toppingList: string[] = ['hours', 'days', 'weeks'];
  ngOnInit() {

    this.user.getuser().then(res => {
      console.log(res)
      if (res !== null) {
        this.MemberID = res.UserID;
        this.checkKYC();
      } else {
      }
    })

  }


  data = [];




  amount: number = 0; // Input amount
  convertedCash: number = 0; // Converted cash value



  checkKYC() {
  
    this.bookingservice.getIskycVerify(this.MemberID).subscribe((res: any) => {
      if (res.IsSuccess == 'true') {
        console.log(res.message.result)
        if(res.message.result === false){
          
          this.router.navigateByUrl('/uploaddoc')
        }
      }
    })
  }


  // @ViewChild('selectfile') el!:ElementRef;   

  // uploadFile(files:any){
  //     var filedata = this.el.nativeElement.files[0];
  //     this.gajender.uploadFileData('url',filedata)
  //     .subscribe(
  //       (data: any) => { 
  //         console.log(data);
  //         if(data.type == 1 && data.loaded && data.total){
  //           console.log("gaju");
  //           this.progress.loaded = data.loaded;
  //           this.progress.total = data.total;
  //         }        else if(data.body){
  //           console.log("Data Uploaded");
  //           console.log(data.body);
  //         }
  
  //        },
  //       error => console.log(error) 
  //     )

  //       }
}
