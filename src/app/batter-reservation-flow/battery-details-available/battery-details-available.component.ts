import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';
import { LoadingService } from 'src/app/services/loading.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-battery-details-available',
  templateUrl: './battery-details-available.component.html',
  styleUrls: ['./battery-details-available.component.scss'],
})
export class BatteryDetailsAvailableComponent  implements OnInit {
  productID:any;
   bikeHubID:any;
   bikeHub:any;
   @ViewChild(IonContent) content!: IonContent;
   azimageUrl:any=environment.azimageUrl_hub;
   imageUrl:any;

  constructor(private route: ActivatedRoute,private loader:LoadingService,
    private _pd:ProductServicesService,private router:Router,private user:UserData,
    private _bh:BookingService) {
    this.productID = route.snapshot.params["id"];
    console.log("this is productID value = "+ this.productID);
}

ProductDetails:any;
  ngOnInit() {
    this.getDetails();
  }
  
  gotobooking(){
    this.user.setpId(this.ProductDetails.ProductID)
    this.router.navigateByUrl('/booking-details-b')
  }

  getDetails(){
    // this.loader.simpleLoader('Loading...')
    this._pd.productDetails(this.productID).subscribe((res)=>{
      this.ProductDetails=res;
      console.log(res)
      this.imageUrl=this.azimageUrl+this.ProductDetails.ImageName;
      console.log(this.imageUrl)

      this.loader.dismissLoader();
    })
  }

  scrollToBottom() {
  
    this.content.scrollToBottom(800);
  }

  scrollToTop() {
    
    this.content.scrollToTop(800);
  }
}