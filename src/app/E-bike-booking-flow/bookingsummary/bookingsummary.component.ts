import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';

@Component({
  selector: 'app-bookingsummary',
  templateUrl: './bookingsummary.component.html',
  styleUrls: ['./bookingsummary.component.scss'],
})
export class BookingsummaryComponent  implements OnInit {
  ProductDetails:any;
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
   
  }
  getDetails(){
    this._pd.productDetails(this.taskId).subscribe((res)=>{
      console.log(res)
      this.ProductDetails=res;
    })
  }
 
     
  
      getbikehubs() {
        this._bh.getbikehubs(this.bikeHubID).subscribe((res:any) => {
          console.log('tests',res)
          this.bikeHub = res.slice(0,1);
        
        })
      }
}
