import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';
import { LoadingService } from 'src/app/services/loading.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss'],
})
export class BookingDetailsComponent  implements OnInit {

  productID:any;
  HubID:any;
  @ViewChild(IonContent) content!: IonContent;
  azimageUrl:any=environment.azimageUrl_hub;
  imageUrl:any;

 constructor(private route: ActivatedRoute,private loader:LoadingService,
   private _pd:ProductServicesService,private router:Router,private store:UserData,
   private _bh:BookingService) {
    this.store.getId('hubid').then(data=>{
      if(data !== null){
        this.payload.HubID=data;

      }
    })
    this.store.getId('pId').then(data=>{
      if(data !== null){
        this.productID=data;
        this.payload.ProductID=data;
        this.getDetails();
      }
    })

}

ProductDetails:any;
 ngOnInit() {
 }
 
 gotobooking(){
   this.router.navigateByUrl('/slotbooking')
 }

 getDetails(){
  //  this.loader.simpleLoader('Loading...')
   //get details by product id and hubid
   this._pd.getdatailsByPIDNdHubId(this.payload).subscribe(
    (res)=>{
      if(res){

        this.ProductDetails=res;
        console.log(res)
        this.imageUrl=this.azimageUrl+this.ProductDetails.ImageName;
      }
     this.loader.dismissLoader();
   },
   (error:any)=>{
    this.loader.dismissLoader();

   }
   )
 }

 scrollToBottom() {
 
   this.content.scrollToBottom(800);
 }

 scrollToTop() {
   
   this.content.scrollToTop(800);
 }

 payload={
  
    "ProductID":'NULL',
    "HubID":"NULL"

 }
}