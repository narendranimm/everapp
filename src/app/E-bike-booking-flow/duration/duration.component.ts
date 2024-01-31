import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, ModalController } from '@ionic/angular';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { BottomsheetComponent } from 'src/app/bottomsheet/bottomsheet.component';
import { CompletekycComponent } from 'src/app/completekyc/completekyc.component';
import { DataservicesService } from 'src/app/dataservices.service';
import { UserData } from 'src/app/providers/user-data';
import { LoadingService } from 'src/app/services/loading.service';
interface Food {
  value: string;
  viewValue: number;
  lable:string;
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
  productId: any =null;
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
 
  foods1: Food[] = [
    { value: 'Foam wash premium', viewValue: 0,lable:'Free' },
    { value: 'Water Wash ', viewValue: 49 ,lable: '₹49'},

  ];
  logindata: any;
  isSolt: boolean = false;
  toppingList1!: number[];
  hourlyRate = 10; // Example hourly rate
  dailyRate = 240; // Example daily rate
  weeklyRate = 1680;
  BookingID:any;
  priceData: any;
  washtype:any=0;
  securitydeposit: number=0;
  ispopupclosed:boolean=false;
  isModelOpen:boolean=false;
   modal:boolean=false;
  @ViewChild(IonContent) content!: IonContent;

  constructor(private datePipe: DatePipe, private snackBar: MatSnackBar,public dialog: MatDialog,
    private loader:LoadingService,public modalController: ModalController,
     private router: Router, private bookingservice: BookingService, private bk: FormBuilder,
      private route: ActivatedRoute, private user: UserData, private dataService: DataservicesService) {

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
        this.checkKYC();
      } else {
        console.log('Data is null. Handle accordingly.');
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
   this.bookingservice.getPriceData().subscribe(res=>{
    this.priceData=res;
    this.dailyRate=this.priceData.filter((x:any)=>x.PayTypes == 'day')[0].Amount
    this.weeklyRate=this.priceData.filter((x:any)=>x.PayTypes == 'week')[0].Amount
    this.hourlyRate=this.priceData.filter((x:any)=>x.PayTypes == 'hour')[0].Amount
    console.log('daily rate',this.dailyRate)
    console.log('week rate',this.weeklyRate)
    console.log('hour rate',this.hourlyRate)
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

  onFirstButtonClick(data: number) {
    this.startDate = ''
    this.endDate=''
    this.convertedCash = 0
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
  onStartTimeChange(e:any){
    console.log(e.target.value);
    this.startDate = this.datePipe.transform(e.target.value, 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
    // console.log('Start Date and Time:', startdate);
  }
  onEndTimeChange(e:any){
    this.convertedCash = 0
    this.endDate= this.datePipe.transform(e.target.value, 'yyyy-MM-dd HH:mm:ss', 'Asia/Kolkata');
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


boxselection(data:any,i:number){
  console.log('selected Amount',data )
  this.washfee.forEach(e => {e.cssstyle ='',e.astyle=''});
  this.washfee[i].cssstyle='box_border';
  this.washfee[i].astyle='seletiondiv';
  this.securitydeposit=this.washfee[i].amount;
  console.log(this.washtype)
  console.log(this.securitydeposit)
}

 //last line
 book() {
if(!this.customDate.valid){
  this.customDate.markAllAsTouched();
  this.snackBar.open(" All fields are required ");
}else{
  this.modalController.dismiss();
  // this.router.navigateByUrl('/adhar');

   if (this.isSolt) {
     this.customDate.markAllAsTouched();
     this.snackBar.open(" Please Select A Slot!!!");
   } else {
     this.loader.simpleLoader('Loading...')
     this.ordersaveData.ProductID = this.productId;
     this.ordersaveData.BookingStartDate = this.startDate;
     this.ordersaveData.BookingEndDate = this.endDate;
     this.ordersaveData.SecurityAmount=this.securitydeposit
     this.ordersaveData.WashAmount=this.washtype
     this.ordersaveData.BookingAmount =this.convertedCash
     this.ordersaveData.AdvanceAmount=0
     this.ordersaveData.PaidAmount=0;
     this.ordersaveData.TotalAmount=0;
     if(this.productId == null ){
       this.snackBar.open("Please Select a Product")
     this.loader.dismissLoader();
 
       return;
     }
 
 
     this.bookingservice.book(this.ordersaveData).subscribe(
       (res: any) => {
        if(res ){

          this.loader.dismissLoader();
if(!res.Id){
  this.snackBar.open('booking failed');

}
          this.BookingID = res.ID
          this.user.setNew('bookingNo',this.BookingID)
          this.user.setNew('startTime',this.startDate)
          this.user.setNew('endTime',this.endDate)
          this.snackBar.open(JSON.stringify(res.message));
        
          
        }else{
          this.loader.dismissLoader();
        }
        // this.dialog.open(CompletekycComponent);
        // this.router.navigateByUrl('/adhar');
       },
       (error)=>{
         this.loader.dismissLoader();
         this.snackBar.open('booking failed');
         
       }
     )
   }
  }
}

proced() {
  this.ispopupclosed = true;
  this.modalController.dismiss();
  // if (this.ispopupclosed) {
   // this.convertedCash = this.convertedCash + this.washtype + this.securitydeposit;
  // }

}
closepopup(){
  console.log(this.modalController.dismiss())
  this.modalController.dismiss();
this.ispopupclosed=true;
}
open() {

  this.isModelOpen=true;
}
checkKYC(){
  this.bookingservice.getIskycVerify(this.ordersaveData.MemberID ).subscribe((res:any)=>{
    if(res.IsSuccess){
console.log(res.message)
    }
  })
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
    "IsFullPaid":0,
    "WashAmount":0,        
    "SecurityAmount":0,
    "CouponID":0,
    "ServiceType":3507
  }

  numberdata = {
    'data': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
      18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
  }
  //# sample data
 washfee=[
  {
  'amount':0,
  'description':'You will pay the entire amount in case of any damage',
  'feetype':'1,500 + iD Proofs',
  'cssstyle':'',
  'astyle':'',
 },
  {
  'amount':49,
  'description':'You will pay ₹15,000 in case of any damage',
  'feetype':'Basic',
  'cssstyle':'',
  'astyle':'',


 },
  {
  'amount':69,
  'description':'You will pay ₹5,000 in case of any damage',
  'feetype':'Premium',
  'cssstyle':'',
  'astyle':'',


 }
]
}
