import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { UserData } from 'src/app/providers/user-data';
import { LoadingService } from 'src/app/services/loading.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-hubbike-images',
  templateUrl: './hubbike-images.component.html',
  styleUrls: ['./hubbike-images.component.scss'],
})
export class HubbikeImagesComponent  implements OnInit {
  azimageUrl:any=environment.azimageUrl_hub;
  bikeHubID:any=0;
  bikeHub:any;
  imagearray:any;
    f_image: any;
    s_image: any;
    t_image: any;
  constructor(private loader: LoadingService,private router:Router, private _pd: ProductServicesService,
    private user:UserData,) {
    this.user.getId('hubid').then(res => {
      console.log(res)
      if (res !== null) {
        this.bikeHubID = res;
        this.getList();
      } else {
        console.log('Data is null. Handle accordingly.');
      }
    })
 }

  ngOnInit() {}
  getList() {
    //later change api to get imaglist only
    this._pd.productListBybranchId(this.bikeHubID,null).subscribe(
      (res:any) => {
        this.loader.dismissLoader();
       if(res){
        this.imagearray=res;
       }
      }, (error) => {
        this.loader.dismissLoader();

      }
    )
  }
}
