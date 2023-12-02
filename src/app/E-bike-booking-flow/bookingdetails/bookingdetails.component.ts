import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.scss'],
})
export class BookingdetailsComponent  implements OnInit {
  bookingForm!:FormGroup;  
  constructor( private booking:BookingService,private bk:FormBuilder) {
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
}
