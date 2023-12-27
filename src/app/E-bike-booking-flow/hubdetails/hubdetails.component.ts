import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-hubdetails',
  templateUrl: './hubdetails.component.html',
  styleUrls: ['./hubdetails.component.scss'],
})
export class HubdetailsComponent  implements OnInit {
  azimageUrl:any='https://everdevuat.blob.core.windows.net/hubs/';
bikeHubID:any=0;
bikeHub:any;
imagearray:any=[];
  constructor(private loadingservice: LoadingService,private router:Router,
    private user:UserData,private _bh:BookingService) {
    this.user.getId('hubid').then(res => {
      console.log(res)
      if (res !== null) {
        this.bikeHubID = res;
    this.getbranchesByBID()
      } else {
        console.log('Data is null. Handle accordingly.');
      }
    })
 }

  ngOnInit() {

  }
  getbranchesByBID() {
   this.loadingservice.simpleLoader('Loading...')
    this._bh.getHubDetaislByHubID(this.bikeHubID).subscribe(
      (res:any) => {
      this.bikeHub = res
      this.loadingservice.dismissLoader();
      if(!res.ImagesList ){
        if( res.ImagesList.length == 0){
        let j=2;
        for (let i = 0; i < j; j=2) {
          this.imagearray[i]          
        }
        }

      }
    },
    (error)=>{
      this.loadingservice.dismissLoader();

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
    this.router.navigateByUrl('/bikelist/'+this.bikeHubID)

  }
}
