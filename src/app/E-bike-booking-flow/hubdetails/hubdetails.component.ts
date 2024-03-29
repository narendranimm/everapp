import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
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
//   azimageUrl:any='https://everdevuat.blob.core.windows.net/hubs/';
// bikeHubID:any=0;
// bikeHub:any;
// imagearray:any=[];
//   f_image: any;
//   s_image: any;
  // t_image: any;
//   constructor(private loader: LoadingService,private router:Router, private _pd: ProductServicesService,
//     private user:UserData,private _bh:BookingService) {
//     this.user.getId('hubid').then(res => {
//       console.log(res)
//       if (res !== null) {
//         this.bikeHubID = res;
//     this.getbranchesByBID()
//       } else {
//         console.log('Data is null. Handle accordingly.');
//       }
//     })
//  }

  // ngOnInit() {

  // }
  // getbranchesByBID() {
  //  this.loader.simpleLoader('Loading...')
  //   this._bh.getHubDetaislByHubID(this.bikeHubID).subscribe(
  //     (res:any) => {
  //     this.bikeHub = res
  //     this.loader.dismissLoader();
  //     this.getList()
     
     
  //   },
  //   (error)=>{
  //     this.loader.dismissLoader();

  //   }
  //   )
  // }
  // getList() {
  //   //later change api to get imaglist only
  //   this._pd.productListBybranchId(this.bikeHubID,null).subscribe(
  //     (res:any) => {
  //       this.loader.dismissLoader();
  //      this.f_image=res[0].ImageName;
  //      this.s_image=res[1].ImageName;
  //      this.t_image=res[2].ImageName;
  //       this.loader.dismissLoader();
  //     }, (error) => {
  //       this.loader.dismissLoader();

  //     }
  //   )
  // }
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
    this.router.navigateByUrl('/bikelist/25')

  }
  disableSelect = new FormControl(false);

  bikeHubID: any =3502;
  bikeHub:any[]=[];
  taskId:any;
  azimageUrl:any='https://everdevuat.blob.core.windows.net/hubs/';
  @ViewChild(IonContent) content!: IonContent;
 constructor(private route: ActivatedRoute,private _pd:ProductServicesService,private _bh:BookingService,private userdata:UserData,private router:Router,private loader: LoadingService,) {
   this.taskId = route.snapshot.params["ID"];
   console.log("this is taskId value = "+ this.taskId);
   this.getbranchesByBID()

   this.userdata.getId('hubid').then(res => {
          console.log(res)
          if (res !== null) {
            this.bikeHubID = res;
            console.log(res)
        this.getbranchesByBID()
          } else {
            console.log('Data is null. Handle accordingly.');
          }
        })
}

  ngOnInit() {
    this.gethubs()
  }
  // @ViewChild(IonContent) content!: IonContent;

  // scrollToBottom() {
  //   // Passing a duration to the method makes it so the scroll slowly
  //   // goes to the bottom instead of instantly
  //   this.content.scrollToBottom(500);
  // }

  // scrollToTop() {
  //   // Passing a duration to the method makes it so the scroll slowly
  //   // goes to the top instead of instantly
  //   this.content.scrollToTop(500);
  // }
  gethubs(){
    this._bh.getbranchesByBID(this.bikeHubID,null).subscribe((res:any) => {
      console.log('tests',res)
      this.bikeHub = res;
      console.log(this.bikeHub)

  })
}
gotohubdetails(id:number){
  this.userdata.setNew("hubid",id)
  
      this.router.navigateByUrl('/hub-details')
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

        this.loader.dismissLoader();
      }, (error) => {
        this.loader.dismissLoader();

      }
    )
  }
}
