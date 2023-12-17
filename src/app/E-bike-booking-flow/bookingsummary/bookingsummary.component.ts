import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { DataservicesService } from 'src/app/dataservices.service';
import { UserData } from 'src/app/providers/user-data';

@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.component.html',
  styleUrls: ['./bookingsummary.component.scss'],
})
export class BookingsummaryComponent  implements OnInit {
  timeDifference=''
  startDate='';
  endDate=''
  BookingStartDate:any;
  BookingEndDate:any
  ProductDetails:any
  productId=1000;
  bikeHubID:any;
  bikeHub:any;
  taskId:any=1000;
  constructor(private dataService: DataservicesService,private snackBar: MatSnackBar,private route: ActivatedRoute,private _pd:ProductServicesService,private _bh: BookingService,private router:Router,private user:UserData,private booking:BookingService) {
    const taskId = route.snapshot.params["ID"];
    console.log("this is taskId value = "+ taskId);
}

  ngOnInit() {
    this.getDetails()
    
    this. getbikehubs();
    this.BookingEndDate;
    this.BookingStartDate;
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

          // Construct the time difference string
          this.timeDifference = `${days} days,${hours} hours `;
        }
      }
    });

  }
  getDetails(){
    this._pd.productDetails(this.taskId).subscribe((res)=>{
      console.log(res)
      this.ProductDetails=res;
    })
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
  
      getbikehubs() {
        this._bh.getbikehubs(this.bikeHubID).subscribe((res:any) => {
          console.log('tests',res)
          this.bikeHub = res.slice(0,1);
        
        })
      }
}
