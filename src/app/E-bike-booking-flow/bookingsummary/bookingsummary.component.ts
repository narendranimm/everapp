import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { DataservicesService } from 'src/app/dataservices.service';
import { UserData } from 'src/app/providers/user-data';
import { OrderService } from 'src/app/services/Order.service';

@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.component.html',
  styleUrls: ['./bookingsummary.component.scss'],
})
export class BookingsummaryComponent implements OnInit {

  timeDifference = 0;
  startDate = '';
  endDate = ''
  BookingStartDate: any;
  BookingEndDate: any
  ProductDetails: any
  productId: any;
  bikeHubID: any;
  bikeHub: any;
  bookingNo!: string;
  
  constructor(private dataService: DataservicesService, private snackBar: MatSnackBar,
    private route: ActivatedRoute, private _pd: OrderService,
    private _bh: BookingService, private router: Router, private user: UserData,
    private booking: BookingService) {
      this.bookingNo  = route.snapshot.params["ID"];
  }
 
  ngOnInit() {
    this.getDetails()
  }
  getDetails() {
    this._pd.getordersummeryByBookingNo(this.bookingNo).subscribe((res) => {
      console.log(res)
      this.ProductDetails = res;
    })
  }

  @ViewChild(IonContent) content!: IonContent;
  data = [];
  scrollToBottom() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the bottom instead of instantly
    this.content.scrollToBottom(500);
  }

  scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    this.content.scrollToTop(500);
  }

}