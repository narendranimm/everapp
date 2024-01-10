import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, ModalController } from '@ionic/angular';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { DataservicesService } from 'src/app/dataservices.service';
import { UserData } from 'src/app/providers/user-data';
import { LoadingService } from 'src/app/services/loading.service';
import { SnackbarService } from 'src/app/snackbar.service';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss'],
})
export class DateTimeComponent implements OnInit {

  startDate: any;
  startTime: any;
  Amount: any;
  customDate!: FormGroup;
  productId: any = null;
  Number!: number;
  ProductDetails: any
  totalHours!: number;
  taskId: any;
  timeDifference: any
  selectedValue!: string;
  selectedValue1!: string;
  selectoptionThree: any;
  selectoptionTwo: any = null;
  selectoptionone: any;

  logindata: any;
  isSolt: boolean = false;
  toppingList1!: number[];
  hourlyRate = 10; // Example hourly rate
  dailyRate = 240; // Example daily rate
  weeklyRate = 1680;
  BookingID: any;
  priceData: any;
  washtype: any = 0;
  securitydeposit: any;
  ispopupclosed: boolean = false;
  isModelOpen: boolean = false;
  modal: boolean = false;


  amount: number = 0; // Input amount
  convertedCash: number = 100; // Converted cash value

  @ViewChild(IonContent) content!: IonContent;

  constructor(private snackBar: MatSnackBar,
    private loader: LoadingService, public modalController: ModalController,
    private router: Router, private bookingservice: BookingService, private bk: FormBuilder, private snackbarService: SnackbarService,
    private route: ActivatedRoute, private user: UserData, private dataService: DataservicesService) {

    // console.log( this.datePipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss'));
    this.customDate = this.bk.group({
      date: ['', Validators.required],
      time: ['', Validators.required]
    })


  }

  //price
  price: number = 0
  ngOnInit() {
    this.toppingList1 = this.numberdata.data;

    this.user.getId('pId').then(data => {
      if (data !== null) {
        this.productId = data;
      }
    }
    );
    this.user.getId('hubid').then(data => {
      if (data !== null) {
        this.ordersaveData.HubID = data;
      }
    }
    );
    this.user.getuser().then(res => {
      console.log(res)
      if (res !== null) {
        this.logindata = res;
        this.ordersaveData.MemberID = this.logindata.UserID;
      } else {
        // Handle the case when data is null
        console.log('Data is null. Handle accordingly.');
        // You might want to set a default value or perform some other action
      }
    })

    this.GetPriceData()
  }
  GetPriceData() {
    this.bookingservice.getPriceData().subscribe(res => {
      this.priceData = res;
      this.dailyRate = this.priceData.filter((x: any) => x.PayTypes == 'day')[0].Amount
      this.weeklyRate = this.priceData.filter((x: any) => x.PayTypes == 'week')[0].Amount
      this.hourlyRate = this.priceData.filter((x: any) => x.PayTypes == 'hour')[0].Amount
      console.log('daily rate', this.dailyRate)
      console.log('week rate', this.weeklyRate)
      console.log('hour rate', this.hourlyRate)
      this.convertedCash = this.priceData.filter((x: any) => x.PayTypes == 'wash')[0].Amount
    })
  }
  duration() {
    this.ordersaveData.ProductID = this.productId;
    console.log(this.ordersaveData)
  }

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




  //last line
  book() {
    


    if (!this.startDate || !this.startTime) {
      this.customDate.markAllAsTouched();
      this.snackBar.open("Please Select A Slot!!!");
      return
    } else {
      this.loader.simpleLoader('Loading...')
      //no porductid for wash
      console.log(this.startTime)
      const dateObject: Date = new Date(this.startDate);
      const timeString: string = this.startTime;
      const combinedDateTimeString: string = `${dateObject.toISOString().split('T')[0]}T${timeString}`;
      this.ordersaveData.ProductID = 0;
      this.ordersaveData.BookingStartDate = combinedDateTimeString;
      this.ordersaveData.BookingEndDate = null;
      this.ordersaveData.TotalAmount = this.convertedCash;
      this.ordersaveData.ServiceType = 3506;
      this.ordersaveData.Remarks = 'Wash service';
      //  if(this.productId == null ){
      //    this.snackBar.open("Please Select a Product")
      //  this.loader.dismissLoader();

      //    return;
      //  }


      this.bookingservice.book(this.ordersaveData).subscribe(
        (res: any) => {
          if (res) {

            this.loader.dismissLoader();
            this.BookingID = res.ID
            this.user.setNew('bookingNo', this.BookingID)
            this.snackbarService.presentSnackbar(res.message, 1000, 'bottom', 'success')

            this.router.navigateByUrl('/booking-summary-m/' + this.BookingID);
          } else {
            this.loader.dismissLoader();
            this.snackbarService.presentSnackbar('booking failed', 1000, 'bottom', 'danger')
          }
        },
        (error) => {
          this.loader.dismissLoader();
          this.snackbarService.presentSnackbar('booking failed', 1000, 'bottom', 'danger')

        }
      )

    }


  }


  //#region dummy data
  ordersaveData = {
    "OrderID": 123,
    "ProductID": 0,
    "BookingStartDate": 'null',
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
    "Remarks": '',
    "CreatedOn": "2023-11-28T00:30:42",
    "DeliveredOn": "2023-11-30T00:30:42",
    "PaymentConfirmedOn": "2023-11-29T00:30:42",
    "IsFullPaid": 1,
    "WashAmount": 0,
    "SecurityAmount": 0,
    "CouponID": 0,
    "ServiceType": 0
  }

  numberdata = {
    'data': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
      18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  }
  //# sample data
  washfee = [
    {
      'amount': 0,
      'description': 'You will pay the entire amount in case of any damage',
      'feetype': '1,500 + iD Proofs',
      'cssstyle': '',
    },
    {
      'amount': 49,
      'description': 'You will pay ₹15,000 in case of any damage',
      'feetype': 'Basic',
      'cssstyle': '',

    },
    {
      'amount': 69,
      'description': 'You will pay ₹5,000 in case of any damage',
      'feetype': 'Premium',
      'cssstyle': '',

    }
  ]
}

