import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-wash-station-list',
  templateUrl: './wash-station-list.component.html',
  styleUrls: ['./wash-station-list.component.scss'],
})
export class WashStationListComponent  implements OnInit {
  bikeHubID: any =3502;
  bikeHub:any;
  taskId:any;
  azimageUrl:any='https://everdevuat.blob.core.windows.net/hubs/';
  @ViewChild(IonContent) content!: IonContent;
 constructor(private route: ActivatedRoute,private loader:LoadingService,
  private _pd:ProductServicesService,private _bh:BookingService,private userdata:UserData,private router:Router) {
}

  ngOnInit() {
    this.gethubs()
  }
  gethubs(){
    this.loader.simpleLoader('Loading...')
    this._bh.getbranchesByBID(this.bikeHubID,null).subscribe((
      res:any) => {
      this.bikeHub = res;
      this.loader.dismissLoader();
      
    },
    (error:any)=>{
      this.loader.dismissLoader();
    }
    )
  }
  
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
gotohubdetails(id:number){
  this.userdata.setNew("hubid",id)
  
      this.router.navigateByUrl('/wash-station-details')
    }
}


