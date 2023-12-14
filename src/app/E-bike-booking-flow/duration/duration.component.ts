import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { BottomsheetComponent } from 'src/app/bottomsheet/bottomsheet.component';
import { UserData } from 'src/app/providers/user-data';
@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
})
export class DurationComponent  implements OnInit {
  customDate!:FormGroup;
  productId:any;
  ProductDetails:any

  taskId:any; 
  constructor(private snackBar: MatSnackBar, private router:Router,private bookingservice:BookingService,private bk:FormBuilder,private route: ActivatedRoute,private user:UserData) {
    this.customDate=this.bk.group({
      date:'',
      time:''
    })
  }

 
  ngOnInit() {
    this.user.getId('pId').then(data => this.productId=data);  

  }
  book(){
    const data = this.customDate.value;
    console.log(this.customDate.value)
    this.bookingservice.book(this.productId).subscribe(
      (res:any)=>{
      this.ProductDetails=res
      this.snackBar.open(JSON.stringify(res.message));
      // this.snackBar.open(JSON.stringify('Booked successfully'));
      this.router.navigateByUrl('/booking-summary');
    }
    )
      }
     

}