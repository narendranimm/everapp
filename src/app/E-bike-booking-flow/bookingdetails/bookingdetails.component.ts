import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';
import { OrderService } from 'src/app/services/Order.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.scss'],
})
export class BookingdetailsComponent implements OnInit {
  ProductDetails: any;
  timeDifference: string = '';
  azimageUrl:any=environment.azimageUrl_hub;
  bookingNo:any=null;
  constructor(private route: ActivatedRoute, private _pd: OrderService, private userdata: UserData) {

    this.userdata.getId('bookingNo').then(data => {
      if (data !== null) {
        this.bookingNo = data;
        this.getDetails()
      }
    })
  }

  ngOnInit() {

  }
  getDetails() {
    this._pd.getordersummeryByBookingNo(this.bookingNo).subscribe((res: any) => {
      console.log(res)
      this.ProductDetails = res;
      if (res) {

        this.gettimedfrnc(res.BookingStartDate, res.BookingEndDate)
      }

    })
  }

  gettimedfrnc(startdate: any, endate: any) {
    // Convert date-time strings to Date objects
    const date1: Date = new Date(startdate);
    const date2: Date = new Date(endate);

    // Calculate the difference between the two date-times in milliseconds
    const dateTimeDifference: number = date2.getTime() - date1.getTime();

    // Convert milliseconds to days, hours, and minutes
    const days: number = Math.floor(dateTimeDifference / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((dateTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes: number = Math.floor((dateTimeDifference % (1000 * 60 * 60)) / (1000 * 60));
    // console.log(`Difference between the two date-times: ${days} days, ${hours} hours, ${minutes} minutes`);
    switch (true) {
      case days !== 0:
        this.timeDifference = `${days} day(s)`;
        break;
      case hours !== 0:
        this.timeDifference =`${hours} hour(s)`;
        break;
      case minutes !== 0:
        this.timeDifference =`${minutes} minute(s)`;
        break;
      default:
        break;
    }
  }
 
}
