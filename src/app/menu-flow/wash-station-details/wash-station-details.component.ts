import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-wash-station-details',
  templateUrl: './wash-station-details.component.html',
  styleUrls: ['./wash-station-details.component.scss'],
})
export class WashStationDetailsComponent  implements OnInit {
  azimageUrl:any='https://everdevuat.blob.core.windows.net/hubs/';
  bikeHubID:any=0;
  bikeHub:any;
  imagearray:any=[];
    f_image: any;
    s_image: any;
    t_image: any;
    constructor(private loader: LoadingService,private router:Router, private _pd: ProductServicesService,
      private user:UserData,private _bh:BookingService) {
      this.user.getId('hubid').then(res => {
        if (res !== null) {
          this.bikeHubID = res;
      this.getbranchesByBID()
        } else {
        }
      })
   }
  
    ngOnInit() {
  
    }
    getbranchesByBID() {
     this.loader.simpleLoader('Loading...')
      this._bh.getHubDetaislByHubID(this.bikeHubID).subscribe(
        (res:any) => {
        this.bikeHub = res
        this.loader.dismissLoader();
        this.getList()
       
       
      },
      (error)=>{
        this.loader.dismissLoader();
  
      }
      )
    }
    getList() {
      //later change api to get imaglist only
      this._pd.productListBybranchId(this.bikeHubID,null).subscribe(
        (res:any) => {
          this.loader.dismissLoader();
          if(res){

            this.f_image=res[0].ImageName;
            this.s_image=res[1].ImageName;
            this.t_image=res[2].ImageName;
          }
            this.loader.dismissLoader();
        }, (error) => {
          this.loader.dismissLoader();
  
        }
      )
    }
    share(){
      if(navigator){
        navigator.share({
          title:'madhapur ev station',
          url:'https://everenergies.in/'
        }).then(()=>{
          console.log("thanks for sharing")
        }).catch((err:any)=>{
          console.log(err)
        })
      }
    }
    gotobikelist(){
      this.router.navigateByUrl('/wash-slot-book')
  
    }
  }
  
