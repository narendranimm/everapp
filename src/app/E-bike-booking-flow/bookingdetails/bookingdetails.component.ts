import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { OrderService } from 'src/app/services/Order.service';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.scss'],
})
export class BookingdetailsComponent  implements OnInit {
 

  ProductDetails:any
  bookingNo!: string;
  constructor( private route: ActivatedRoute,private _pd: OrderService,) {
    const bookingNo = route.snapshot.params["ID"];
    console.log("this is orderid value = " + bookingNo);
    this.bookingdata.BookingNo = bookingNo;
    
  }


  ngOnInit() {
   this.getDetails()
  }
  getDetails() {
    this._pd.getordersummeryByBookingNo(this.bookingdata).subscribe((res) => {
      console.log(res)
      this.ProductDetails = res;
    })
  }
  bookingdata = {
    "BookingNo": null
  }
}
