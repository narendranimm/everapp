import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, ModalController } from '@ionic/angular';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { DataservicesService } from 'src/app/dataservices.service';
import { UserData } from 'src/app/providers/user-data';
import { LoadingService } from 'src/app/services/loading.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss'],
})
export class BookingDetailsComponent implements OnInit {

  productID: any;
  HubID: any;
  @ViewChild(IonContent) content!: IonContent;
  azimageUrl: any = environment.azimageUrl_hub;
  imageUrl: any;
  BookingID: any;
  coupon: number = 0;
  Toatlcharge: any = 0;
  userid:any=0
  constructor(private snackBar: MatSnackBar, public dialog: MatDialog,
    private loader: LoadingService, public modalController: ModalController, private _ps: ProductServicesService,
    private router: Router, private bookingservice: BookingService,
    private route: ActivatedRoute, private user: UserData,) {
    this.user.getId('hubid').then(data => {
      if (data !== null) {
        this.payload.HubID = data;

      }
    })
    //late save userid and pidhubid all in one ..and recall
    this.user.getuser().then(data => {
      if (data !== null) {
        this.userid = data.UserID;
        alert(this.userid)
      }
    })
    this.user.getId('pId').then(data => {
      if (data !== null) {
        this.productID = data;
        this.payload.ProductID = data;
        this.getDetails();
      }
    })

  }

  ProductDetails: any;
  ngOnInit() {
  }

  gotobooking() {
    this.router.navigateByUrl('/slotbooking')
  }

  getDetails() {
    this.loader.simpleLoader('Loading...')
    //get details by product id and hubid
    this._ps.getdatailsByPIDNdHubId(this.payload).subscribe(
      (res: any) => {
        if (res) {

          this.ProductDetails = res;
          console.log(res)
          this.imageUrl = this.azimageUrl + this.ProductDetails.ImageName;

        }
        this.loader.dismissLoader();
      },
      (error: any) => {
        this.loader.dismissLoader();

      }
    )
  }

  scrollToBottom() {

    this.content.scrollToBottom(800);
  }

  scrollToTop() {

    this.content.scrollToTop(800);
  }
  gotnext() {
    this.SaveOrder()
  }
  payload = {

    "ProductID": 0,
    "HubID": 0

  }
  SaveOrder() {
    this.loader.simpleLoader('Loading...')
    this.ordersaveData.ProductID = this.payload.ProductID;
    this.ordersaveData.MemberID = this.userid;
    this.ordersaveData.BookingStartDate = null;
    this.ordersaveData.BookingEndDate = null;
    this.ordersaveData.SecurityAmount = 0
    this.ordersaveData.WashAmount = 0
    this.ordersaveData.BookingAmount = this.ProductDetails.Price
    this.ordersaveData.AdvanceAmount = 0
    this.ordersaveData.PaidAmount = 0;
    this.ordersaveData.TotalAmount = Math.floor(this.ProductDetails.price + this.coupon + this.ProductDetails.TaxAmount)
    this.ordersaveData.HubID = this.ProductDetails.BranchID;
    if ( this.payload.ProductID == null) {
      this.snackBar.open("Please Select a Product")
      this.loader.dismissLoader();
      return;
    }
    if (this.userid == 0) {
      this.snackBar.open("Please Login for booking")
      this.loader.dismissLoader();
      return;
    }


    this.bookingservice.book(this.ordersaveData).subscribe(
      (res: any) => {
        if (res) {

          this.loader.dismissLoader();
          if (res.Status == 'false') {
            this.snackBar.open('booking failed');
            return

          }
          this.BookingID = res.ID
          this.user.setNew('bookingNo', this.BookingID)
          this.user.setNew('totalamount',this.ordersaveData.TotalAmount)
          //  this.user.setNew('TotalAmount',this.)
          //  this.user.setNew('endTime',null)
          this.snackBar.open(JSON.stringify(res.message));
          this.router.navigateByUrl('/payment-gateway/3508')
        } else {
          this.loader.dismissLoader();
        }
        // this.dialog.open(CompletekycComponent);
        // this.router.navigateByUrl('/adhar');
      },
      (error) => {
        this.loader.dismissLoader();
        this.snackBar.open('booking failed');

      }
    )
  }
  //#region dummy data
  ordersaveData = {
    "OrderID": 123,
    "ProductID": 0,
    "BookingStartDate": null,
    "BookingEndDate": null,
    "IsActive": true,
    "BookingNo": "ABC123",
    "HubID": 0,
    "MemberID": 0,
    "BookingStatus": 2,
    "AddressID": 0,
    "BookingAmount": 0,
    "AdvanceAmount": 0,
    "DiscountAmount": 0,
    "TaxAmount": 0,
    "TotalAmount": 0,
    "PaidAmount": 0,
    "IsCancel": false,
    "Remarks": "Bike Booking",
    "CreatedOn": "2023-11-28T00:30:42",
    "DeliveredOn": "2023-11-30T00:30:42",
    "PaymentConfirmedOn": null,
    "IsFullPaid": 0,
    "WashAmount": 0,
    "SecurityAmount": 0,
    "CouponID": 0,
    "ServiceType": 3508
  }
}

//bike=3507
//btry=3508
//wash=3506