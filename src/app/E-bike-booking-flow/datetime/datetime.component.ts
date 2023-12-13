import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
})
export class DatetimeComponent  implements OnInit {
  datetimeForm!:FormGroup;
  ProductDetails:any;
  taskId:any;
  ProductID=1000;
   constructor(private snackBar:MatSnackBar, private booking:BookingService,private bk:FormBuilder,private user:UserData,private route: ActivatedRoute,private router:Router) {
    this.datetimeForm=this.bk.group({
      "OrderID": 123,
      "ProductID":432 ,
      BookingStartDate:'',
      BookingEndDate:'',
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
  ngOnInit(): void {
    
  }
 
  book(){
    const data = this.datetimeForm.value;
    this.snackBar.open("Datetime set successfully"
    );
    this.booking.book(this.taskId).subscribe((res:any)=>{
      console.log(res)
      this.ProductDetails=res;
      this.router.navigate(['/booking-summary/1000'])
      this.snackBar.open(JSON.stringify(res.message)
      );
    })
    console.log(this.datetimeForm.value)
    
        
        
      }
}
