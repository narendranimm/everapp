import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { BottomsheetComponent } from 'src/app/bottomsheet/bottomsheet.component';
@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
})
export class DurationComponent  implements OnInit {

  bookingForm!:FormGroup;  
  constructor( private booking:BookingService,private bk:FormBuilder,private route: ActivatedRoute,) {
    this.bookingForm=this.bk.group({
      "OrderID": 123,
      "ProductID": 456,
      "BookingStartDate": "2023-11-29T00:00:00",
      "BookingEndDate": "2023-12-01T00:00:00",
      "IsActive": true,
      "BookingNo": "ABC123",
      "HubID": 1,
      "MemberID": 789,
      "BookingStatus": 2,
      "AddressID": 1011,
      "BookingAmount": 1000.00,
      "AdvanceAmount": 200.00,
      "DiscountAmount": 100.00,
      "TaxAmount": 180.00,
      "TotalAmount": 1280.00,
      "PaidAmount": 400.00,
      "IsCancel": false,
      "Remarks": "Good service",
      "CreatedOn": "2023-11-28T00:30:42",
      "DeliveredOn": "2023-11-30T00:30:42",
      "PaymentConfirmedOn": "2023-11-29T00:30:42"
    })
    const taskId = route.snapshot.params["ID"];
    console.log("this is taskId value = "+ taskId);
  }


  ngOnInit() {}
  book(){
    const data = this.bookingForm.value;
    delete data['confirm'];
    this.booking.book(data).subscribe((res:any)=>{
       alert('user register successfully')
    })
    console.log(this.bookingForm.value)
    
        
        
      }
  // constructor(private _bottomSheet: MatBottomSheet) {}

  // openBottomSheet(): void {
  //   this._bottomSheet.open(BottomsheetComponent);
  // }
  // customPopoverOptions = {

  // };
  // ngOnInit() {}

}