import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-hublists',
  templateUrl: './hublists.component.html',
  styleUrls: ['./hublists.component.scss'],
})
export class HublistsComponent  implements OnInit {
  bikeHubID: any =3502;
  bikeHub:any;
  taskId:any;
  azimageUrl:any='https://everdevuat.blob.core.windows.net/hubs/';
  @ViewChild(IonContent) content!: IonContent;
 constructor(private route: ActivatedRoute,private _pd:ProductServicesService,private _bh:BookingService,private userdata:UserData,private router:Router) {
   this.taskId = route.snapshot.params["ID"];
   console.log("this is taskId value = "+ this.taskId);
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

  })
}
gotohubdetails(id:number){
  this.userdata.setNew("hubid",id)
  
      this.router.navigateByUrl('/hub-details')
    }
}
