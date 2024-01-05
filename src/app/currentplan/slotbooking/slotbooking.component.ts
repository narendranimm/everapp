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
@Component({
  selector: 'app-slotbooking',
  templateUrl: './slotbooking.component.html',
  styleUrls: ['./slotbooking.component.scss'],
})
export class SlotbookingComponent implements OnInit {

  startDate: any = null;
  endDate: any; any = null;
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
  bookingdata: any;
  @ViewChild(IonContent) content!: IonContent;

  constructor(private snackBar: MatSnackBar,private datePipe: DatePipe,
    private loader: LoadingService, public modalController: ModalController,
    private router: Router, private bookingservice: BookingService, private bk: FormBuilder,
    private route: ActivatedRoute, private user: UserData, private dataService: DataservicesService) {

    // console.log( this.datePipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss'));
    this.customDate = this.bk.group({
      date: ['', Validators.required],
      time: ['', Validators.required]
    })

    this.dataService.combinedData$.subscribe(data => {
      if (data) {
        this.startDate = data.inputValue;
        this.endDate = data.inputValue1;
        const startTime = new Date(this.startDate).getTime();
        const endTime = new Date(this.endDate).getTime();
        if (!isNaN(startTime) && !isNaN(endTime)) {
          const difference = Math.abs(endTime - startTime);

          // Calculate days, hours, minutes, seconds
          const days = Math.floor(difference / (1000 * 3600 * 24));
          const hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));

          const minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
          const ammount = Math.floor(hours * 20);
          // Construct the time difference string
          this.timeDifference = `${days} days,${hours} hours `;
          this.Amount = `${ammount}`
        }
      }
    })
  }
  numbers = [
    { count: '1' },
    { count: '2' },
    { count: '3' },
    { count: '4' },
    { count: '5' },
    { count: '6' },

  ]
  days = [
    { duration: 'hours' },
    { duration: 'days' },
    { duration: 'weeks' },
  ]
  //price
  price: number = 10
  toppingList: string[] = ['hours', 'days', 'weeks'];
  ngOnInit() {
    this.toppingList1 = this.numberdata.data;


    this.user.getId('extendplandata').then(res => {
      if (res !== null) {
        this.bookingdata = res;
        this.productId=res.ProductID;
        console.log(res)
        this.startDate=res.BookingStartDate;
        //this.startDate = this.datePipe.transform(res.BookingStartDate, 'MM/dd/yyyyTHH:mm', 'UTC+6');

      } else {
        // Handle the case when data is null
        console.log('Data is null. Handle accordingly.');
        // You might want to set a default value or perform some other action
      }
    })
    this.dataService.combinedData$.subscribe(data => {
      if (data) {
        this.startDate = data.inputValue;
        this.endDate = data.inputValue1;
        const startTime = new Date(this.startDate).getTime();
        const endTime = new Date(this.endDate).getTime();
        if (!isNaN(startTime) && !isNaN(endTime)) {
          const difference = Math.abs(endTime - startTime);

          // Calculate days, hours, minutes, seconds
          const days = Math.floor(difference / (1000 * 3600 * 24));
          const hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));

          const minutes = Math.floor((difference % (1000 * 3600)) / (1000 * 60));
          const seconds = Math.floor((difference % (1000 * 60)) / 1000);
          const ammount = Math.floor(hours * 20);
          // Construct the time difference string
          this.timeDifference = `${days} days,${hours} hours `;
          this.Amount = `${ammount}`
        }
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


  amount: number = 0; // Input amount
  convertedCash: number = 0; // Converted cash value



  //last line
  book() {

    if (this.startDate == null && this.endDate == null) {
      this.snackBar.open("Please Select a Slot")
      return;
    }
    if (this.productId == null) {
      this.snackBar.open("Please Select a Product")
      this.loader.dismissLoader();
      return;
    }
    this.loader.simpleLoader('Loading...')
    this.ordersaveData.ProductID = this.bookingdata.ProductID;
    this.ordersaveData.BookingStartDate = this.startDate;
    this.ordersaveData.BookingEndDate = this.endDate;
    this.ordersaveData.OrderID = this.bookingdata.OrderID;
    this.ordersaveData.BookingNo = this.bookingdata.BookingNo;
    this.ordersaveData.Remarks = 'Plan Extended'
    this.ordersaveData.TotalAmount = this.convertedCash + this.bookingdata.TotalAMount;





    this.bookingservice.extendOrderplan(this.ordersaveData).subscribe(
      (res: any) => {
        this.loader.dismissLoader();
        this.BookingID = res.ID
        this.user.setNew('bookingNo', this.BookingID)
        this.snackBar.open(JSON.stringify(res.message));
        this.router.navigateByUrl('/booking_summary/' + this.BookingID);
      },
      (error) => {
        this.loader.dismissLoader();
        this.snackBar.open('booking failed');
      }
    )

  


}
onDateSelected(event: Event) {
  const selectedDate = (event.target as HTMLInputElement).value;
  console.log('Selected Date:', this.startDate);
  console.log('Selected D ebdate:', this.endDate);
  this.datePrice();
}

datePrice() {

  const startTime = new Date(this.startDate).getTime();
  const endTime = new Date(this.endDate).getTime();
  if (!isNaN(startTime) && !isNaN(endTime)) {
    const difference = Math.abs(endTime - startTime);

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(difference / (1000 * 3600 * 24));
    const hours = Math.floor((difference % (1000 * 3600 * 24)) / (1000 * 3600));

    const ammount = Math.floor(hours * 20);
    // Construct the time difference string
    this.timeDifference = `${days} days,${hours} hours `;
    let dayprice = days * this.dailyRate + hours * this.hourlyRate;
    this.convertedCash = dayprice
  }

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
  "PaymentConfirmedOn": "2023-11-29T00:30:42",
  "IsFullPaid": 1,
  "WashAmount": 0,
  "SecurityAmount": 0,
  "CouponID": 0
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

