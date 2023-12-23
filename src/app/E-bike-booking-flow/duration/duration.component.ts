import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { BottomsheetComponent } from 'src/app/bottomsheet/bottomsheet.component';
import { DataservicesService } from 'src/app/dataservices.service';
import { UserData } from 'src/app/providers/user-data';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  providers: [DatePipe],
})
export class DurationComponent implements OnInit {
  startDate: any;
  endDate: any;
  Amount: any;
  customDate!: FormGroup;
  productId: any;
  Number!: number;
  ProductDetails: any
  totalHours!: number;
  taskId: any;
  timeDifference: any
  selectedValue!: string;
  selectedValue1!: string;
  selectoptionThree: any;
  selectoptionTwo: any=null;
  selectoptionone: any;
  foods: Food[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
  ];
  foods1: Food[] = [
    { value: 'hours', viewValue: 'hours' },
    { value: 'days', viewValue: 'days' },
    { value: 'weeks', viewValue: 'weeks' },

  ];
  logindata: any;
  isSolt: boolean = false;
  toppingList1!: number[];
  hourlyRate = 10; // Example hourly rate
  dailyRate = 240; // Example daily rate
  weeklyRate = 1680;
  constructor(private datePipe: DatePipe, private snackBar: MatSnackBar, private router: Router, private bookingservice: BookingService, private bk: FormBuilder, private route: ActivatedRoute, private user: UserData, private dataService: DataservicesService) {

    // console.log( this.datePipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss'));
    this.customDate = this.bk.group({
      date: ['', Validators.required],
      time: ['', Validators.required]
    })
    this.totalHours = this.convertToHours(this.Number);
    this.totalHours = this.convertToHoursin(this.Number);

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

    this.user.getId('pId').then(data => {
      if (data !== null) {
        this.productId = data;
      } else {
        // Handle the case when data is null
        console.log('Data is null. Handle accordingly.');
        // You might want to set a default value or perform some other action
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
  duration() {
    const data = this.customDate.value;
    console.log(this.customDate.value)
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

  onFirstButtonClick(data: number) {
    const currentDate = new Date();
    this.startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
    // console.log('Start Date and Time:', startdate);
    // adding time slot to the current time
    currentDate.setHours(currentDate.getHours() + data);
    this.endDate= this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
    // console.log('End Date and Time:', enddate);
    this.selectoptionone = data;
    this.convertedCash = Math.floor(data * this.price)

  }
  onSecondButtonClick() {
    if(this.selectoptionTwo == null){
      this.snackBar.open('Pleasect Select Time First!!!');
      return;
    }


    if (this.selectoptionThree === 'hours') {
      this.convertedCash = this.selectoptionTwo * this.hourlyRate;
      const currentDate = new Date();
      this.startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
      console.log('start Date and Time:', this.startDate);
      currentDate.setHours(currentDate.getHours() + parseInt(this.selectoptionTwo));
      this.endDate= this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
      console.log('End Date and Time:', this.endDate);
    } else if (this.selectoptionThree === 'days') {
      const currentDate = new Date();
      this.startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
      console.log('start Date and Time:', this.startDate);

      currentDate.setDate(currentDate.getDate() + parseInt(this.selectoptionTwo));
      this.endDate= this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
      console.log('End Date and Time:', this.endDate);

      //price
      this.convertedCash = this.selectoptionTwo * this.dailyRate;
    } else if (this.selectoptionThree === 'weeks') {
      this.convertedCash = this.selectoptionTwo * this.weeklyRate;

      const currentDate = new Date();
      this.startDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
      console.log('start Date and Time:', this.startDate);

      currentDate.setDate(currentDate.getDate()+(parseInt(this.selectoptionTwo) * 7));
      this.endDate= this.datePipe.transform(currentDate, 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
      console.log('End Date and Time:', this.endDate);

      //price
    } else {
      this.convertedCash = 0; // Handle unexpected selections
    }
  }
  convertToHours(weeks: number): number {
    const hoursInDay = 24;
    const hoursInWeek = hoursInDay * 7;

    const totalHours = (weeks * hoursInWeek);
    console.log('totalhours in a 5weeks ' + totalHours)
    return totalHours;
  }
  convertToHoursin(day: number): number {
    const hoursInDay = 24;

    const totalHours = (day * hoursInDay);
    console.log('total hours ' + totalHours)
    return totalHours;
  }


  amount: number = 0; // Input amount
  convertedCash: number  = 0; // Converted cash value



  //last line
  book() {
    if (this.isSolt) {
      this.customDate.markAllAsTouched();
      this.snackBar.open(" Please Select A Slot!!!");
    } else {
      this.ordersaveData.ProductID = this.productId;
      this.ordersaveData.BookingStartDate = this.startDate;
      this.ordersaveData.BookingEndDate = this.endDate;
      console.log(this.ordersaveData)
      this.bookingservice.book(this.ordersaveData).subscribe(
        (res: any) => {
          this.ProductDetails = res
          this.snackBar.open(JSON.stringify(res.message));
          // this.snackBar.open(JSON.stringify('Booked successfully'));
          this.router.navigateByUrl('/booking-summary');
        }
      )
    }
  }

  ordersaveData = {
    "OrderID": 123,
    "ProductID": '0',
    "BookingStartDate": this.datePipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss'),
    "BookingEndDate": "2023-12-01T00:00:00",
    "IsActive": true,
    "BookingNo": "ABC123",
    "HubID": 1,
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
    "PaymentConfirmedOn": "2023-11-29T00:30:42"
  }

  numberdata = {
    'data': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
      18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  }

}
