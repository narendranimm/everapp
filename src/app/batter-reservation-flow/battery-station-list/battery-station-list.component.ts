import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-battery-station-list',
  templateUrl: './battery-station-list.component.html',
  styleUrls: ['./battery-station-list.component.scss'],
})
export class BatteryStationListComponent  implements OnInit {
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
      this.bikeHub = res
  })
  }  
}
