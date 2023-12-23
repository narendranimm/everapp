import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { UserData } from 'src/app/providers/user-data';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { environment } from 'src/environments/environment.prod';
@Component({
  selector: 'app-bikedetails',
  templateUrl: './bikedetails.component.html',
  styleUrls: ['./bikedetails.component.scss'],
})
export class BikedetailsComponent  implements OnInit {
   productID:any;
   bikeHubID:any;
   bikeHub:any;
   @ViewChild(IonContent) content!: IonContent;
   azimageUrl:any=environment.azimageUrl_hub;
   imageUrl:any;

  constructor(private route: ActivatedRoute,private _pd:ProductServicesService,private router:Router,private user:UserData,private _bh:BookingService) {
    this.productID = route.snapshot.params["ID"];
    console.log("this is productID value = "+ this.productID);
}

ProductDetails:any;
  ngOnInit() {
    this.getDetails();
  }
  
  gotobooking(){
    this.user.setpId(this.ProductDetails.ProductID)
    this.router.navigateByUrl('/slotbooking')
  }

  getDetails(){
    this._pd.productDetails(this.productID).subscribe((res)=>{
      this.ProductDetails=res;
      this.imageUrl=this.azimageUrl+this.ProductDetails.ImageName
    })
  }

  scrollToBottom() {
  
    this.content.scrollToBottom(800);
  }

  scrollToTop() {
    
    this.content.scrollToTop(800);
  }

 
}
