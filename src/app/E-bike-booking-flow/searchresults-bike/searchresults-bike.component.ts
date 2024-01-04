import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';

@Component({
  selector: 'app-searchresults-bike',
  templateUrl: './searchresults-bike.component.html',
  styleUrls: ['./searchresults-bike.component.scss'],
})
export class SearchresultsBikeComponent  implements OnInit {
  bikeHubID: any = 3502;
  bikeHub: any;
  constructor(private _bh: BookingService,) {
    this.getbranchesByBID()
   }
  getbranchesByBID() {
   
    this._bh.getbranchesByBID(this.bikeHubID, null).subscribe(
      (res: any) => {
        console.log('tests', res)
        this.characters = res;


      }, (error: any) => {
     

      }
    )
  }
  ngOnInit() {}
  searchText = '';
  characters = [
  
    
  ]
}
