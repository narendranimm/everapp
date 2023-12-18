import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
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
  startDate:any;
  endDate:any;
  Amount:any;
  customDate!: FormGroup;
  productId: any;
  Number!:number;
  ProductDetails: any
  totalHours!: number;
  taskId: any;
  timeDifference:any
  selectedValue!: string;
  selectedValue1!: string;
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
  constructor(private datePipe: DatePipe,private snackBar: MatSnackBar, private router: Router, private bookingservice: BookingService, private bk: FormBuilder, private route: ActivatedRoute, private user: UserData,private dataService:DataservicesService) {
  console.log(Date.now())
 console.log( this.datePipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss'));
    this.customDate = this.bk.group({
      date: ['', Validators.required],
      time: ['', Validators.required]
    })
    this.totalHours = this.convertToHours(this.Number);  
    this.totalHours=this.convertToHoursin(this.Number);
  }
  numbers=[
    {count:'1'},
    {count:'2'},
    {count:'3'},
    {count:'4'},
    {count:'5'},
    {count:'6'},

  ]
  days=[
    {duration:'hours'},
    {duration:'days'},
    {duration:'weeks'},
  ]
  toppings = new FormControl('');

  toppingList: string[] = ['hours', 'days', 'weeks'];
  toppings1 = new FormControl('');

  toppingList1: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];
  ngOnInit() {
    this.user.getId('pId').then(data =>{

      this.productId = data;
      this.ordersaveData.ProductID=this.productId;
    }
       );
    this.user.getuser().then(res=>{
      console.log(res)
      this.logindata=res;
      this.ordersaveData.MemberID=this.logindata.UserID;
      console.log(this.ordersaveData)
    })
  }
  duration() {
    const data = this.customDate.value;
    console.log(this.customDate.value)
  }
  book() {
    const data = this.customDate.value;
    if (!this.customDate.valid) {
      this.customDate.markAllAsTouched();
      this.snackBar.open(" All fields are required ");
    } else {
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
  @ViewChild(IonContent) content!: IonContent;
  data=[];
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
    convertToHours( weeks: number): number {
      const hoursInDay = 24;
      const hoursInWeek = hoursInDay * 7;
      
      const totalHours =  (weeks * hoursInWeek);
      console.log('totalhours in a 5weeks '+totalHours)
      return totalHours;
    }
    convertToHoursin(day: number): number {
      const hoursInDay = 24;
      
      
      const totalHours = (day* hoursInDay) ;
      console.log('total hours '+totalHours)
      return totalHours;
    }


    ordersaveData={
      "OrderID": 123,
      "ProductID": '0',
      "BookingStartDate":  this.datePipe.transform(Date.now(), 'yyyy-MM-dd HH:mm:ss'),
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
}
