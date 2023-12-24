import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-battery-station',
  templateUrl: './battery-station.component.html',
  styleUrls: ['./battery-station.component.scss'],
})
export class BatteryStationComponent  implements OnInit {

  bikeHubID:any=3503
  bikeHub:any;
  azimageUrl:any=environment.azimageUrl_hub;

  constructor(private _bh:BookingService) { 
    this.getbatteryhubs();
  }

  ngOnInit() {}
  getbatteryhubs(){
    this._bh.getbikehubs(this.bikeHubID).subscribe((res:any) => {
      console.log('tests',res)
      this.bikeHub = res.slice(0,1)
  })
  }  

}
