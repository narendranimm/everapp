import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';
import { OrderService } from 'src/app/services/Order.service';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.scss'],
})
export class BookingdetailsComponent  implements OnInit {
  ProductDetails:any
  constructor( private route: ActivatedRoute,private _pd: OrderService,private userdata:UserData) {
  
    this.userdata.getId('bookingNo').then(data=>{debugger
      if(data !== null){
         alert('')
        this.bookingdata.BookingNo=data;
        this.getDetails()
      }
    })

   
}


  ngOnInit() {
   
  }
  getDetails() {
    console.log(this.bookingdata)
    this._pd.getordersummeryByBookingNo(this.bookingdata).subscribe((res) => {
      console.log(res)
      this.ProductDetails = res;
    })
  }
  bookingdata = {
    "BookingNo": null
  }
}
