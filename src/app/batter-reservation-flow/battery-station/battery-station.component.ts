import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';
import { LoadingService } from 'src/app/services/loading.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-battery-station',
  templateUrl: './battery-station.component.html',
  styleUrls: ['./battery-station.component.scss'],
})
export class BatteryStationComponent  implements OnInit {

  batteryHubID:any=3503
  batteryHub:any;
  azimageUrl:any=environment.azimageUrl_hub;

  constructor(private _bh:BookingService,private user:UserData,private loader:LoadingService) { 
      this.user.getId('hubid').then(res => {
        if (res !== null) {
          this.batteryHubID = res;
          this.loader.simpleLoader('Loading...')

            this.getbatteryhubs()
        } else {
          console.log('Data is null. Handle accordingly.');
        }
      })
  }

  ngOnInit() {}
  getbatteryhubs(){
    this._bh.getHubDetaislByHubID(this.batteryHubID).subscribe(
      (res:any) => {
        this.loader.dismissLoader();
      this.batteryHub = res
  },
  (error)=>{
    this.loader.dismissLoader();
  }
  )
  }  

}
