import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';
import { OrderService } from 'src/app/services/Order.service';

@Component({
  selector: 'app-booking-summary',
  templateUrl: './booking-summary.component.html',
  styleUrls: ['./booking-summary.component.scss'],
})
export class BookingSummaryComponent  implements OnInit {
  bookingid:any;
  ProductDetails: any;
  constructor( private snackBar: MatSnackBar,
    private route: ActivatedRoute, private _pd: OrderService,
    private _bh: BookingService, private router: Router, private user: UserData,
    private booking: BookingService) { 

    this.bookingid = route.snapshot.params["ID"];
    console.log("this is branchid value = " + this.bookingid);
  }

  ngOnInit() {this.getDetails()}
  getDetails() {
    this._pd.getordersummeryByBookingNo(this.bookingid).subscribe((res) => {
      console.log(res)
      this.ProductDetails = res;
    })
  }
}
