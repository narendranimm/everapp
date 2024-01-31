import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleMap } from '@capacitor/google-maps';
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
    this.createMap()
  }
  
  gotobooking(){
    this.user.setpId(this.ProductDetails.ProductID)
    this.router.navigateByUrl('/booking-details-b')
  }

  getDetails(){
    //  this.loader.simpleLoader('Loading...')
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

  apiKey = 'AIzaSyCU4W4iQLV5ydrW3UxZncI_JdLi1EsKH5A';

  @ViewChild('map')
   mapRef!: ElementRef<HTMLElement>;
   newMap!: GoogleMap;
 
   async createMap() {
     this.newMap = await GoogleMap.create({
       id: 'my-cool-map',
       element: this.mapRef.nativeElement,
       apiKey: this.apiKey,
       config: {
         center: {
           
           lat:  17.448294,
           lng: 78.391487,
         },
         zoom: 8,
       },
     });
   }
 



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
    "IsFullPaid": 0,
    "WashAmount": 0,
    "SecurityAmount": 0,
    "CouponID": 0,
    "ServiceType": 3508
  }
}