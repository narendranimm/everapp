import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';

@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.component.html',
  styleUrls: ['./bookingsummary.component.scss'],
})
export class BookingsummaryComponent  implements OnInit {
  BookingStartDate:any;
  BookingEndDate:any
  ProductDetails:any
  productId=1000;
  bikeHubID:any;
  bikeHub:any;
  taskId:any=1000;
  constructor(private snackBar: MatSnackBar,private route: ActivatedRoute,private _pd:ProductServicesService,private _bh: BookingService,private router:Router,private user:UserData,private booking:BookingService) {
    const taskId = route.snapshot.params["ID"];
    console.log("this is taskId value = "+ taskId);
}

  ngOnInit() {
    this.getDetails()
    
    this. getbikehubs();
    this.BookingEndDate;
    this.BookingStartDate;
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
