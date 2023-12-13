import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';

@Component({
  selector: 'app-hubdetails',
  templateUrl: './hubdetails.component.html',
  styleUrls: ['./hubdetails.component.scss'],
})
export class HubdetailsComponent  implements OnInit {
  azimageUrl:any='https://everdevuat.blob.core.windows.net/hubs/';
taskId:any;
bikeHubID:any;
bikeHub:any;
  constructor(private route: ActivatedRoute,private _pd:ProductServicesService,private _bh:BookingService) {
    this.taskId = route.snapshot.params["ID"];
    console.log("this is taskId value = "+ this.taskId);
   
 }

  ngOnInit() {

    this.getbikehubs()
  }
  getbikehubs() {
    this._bh.getbikehubs(this.bikeHubID).subscribe((res:any) => {
      console.log('tests',res)
      this.bikeHub = res.slice(0,1);
    
    })
  }
}
