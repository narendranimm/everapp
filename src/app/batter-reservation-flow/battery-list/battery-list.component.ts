import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';
import { LoadingService } from 'src/app/services/loading.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-battery-list',
  templateUrl: './battery-list.component.html',
  styleUrls: ['./battery-list.component.scss'],
})
export class BatteryListComponent implements OnInit {

  batteryHubID: any = 3503
  batteryHub: any;
  azimageUrl: any = environment.azimageUrl_hub;

  constructor(private _bh: BookingService, private store: UserData, private router:Router,
    private loader: LoadingService) {
    this.store.getId('hubid').then((res:any) => {
      if (res !== null) {
        this.batteryHubID = res;
        this.loader.simpleLoader('Loading...')

        this.getbatteryhubs()
      } else {
        console.log('Data is null. Handle accordingly.');
      }
    })
  }

  ngOnInit() { }
  getbatteryhubs() {
    this._bh.getBikesByBranchID(this.batteryHubID).subscribe(
      (res: any) => {
        this.loader.dismissLoader();
        this.batteryHub = res
      },
      (error:any) => {
        this.loader.dismissLoader();
      }
    )
  }  

  gotoBtryDetails(id:any){
    this.store.setpId(id);
    this.router.navigateByUrl('battery-details-available/'+id)

  }
}