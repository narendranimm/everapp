import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';
import { LoadingService } from 'src/app/services/loading.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-battery-station-list',
  templateUrl: './battery-station-list.component.html',
  styleUrls: ['./battery-station-list.component.scss'],
})
export class BatteryStationListComponent implements OnInit {
  bikeHubID: any = 3503
  bikeHub: any;
  azimageUrl: any = environment.azimageUrl_hub;
  searchValue: any;
bikename:any=null;
  constructor(private _bh: BookingService, private userdata: UserData,
    private loader: LoadingService,
    private router: Router) {
    this.loader.simpleLoader('Loading...')
    this.getbatteryhubs();
  }

  ngOnInit() { }
  getbatteryhubs() {
    this._bh.getbranchesByBID(this.bikeHubID,this.bikename).subscribe(
      (res: any) => {
        this.bikeHub = res;
        // this.loader.dismissLoader();

      },
      (error) => {
        // this.loader.dismissLoader();
      }
    )
  }

  search(data:any){
    console.log(this.searchValue)
    this.bikename=this.searchValue;
     this.getbatteryhubs();
  }
  gotohubdetails(id: number) {
    this.userdata.setNew("hubid", id);
    this.router.navigateByUrl('/battery-station')
  }
}
