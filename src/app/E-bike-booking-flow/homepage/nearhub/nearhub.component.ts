import { Component, Input, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';

@Component({
  selector: 'app-nearhub',
  templateUrl: './nearhub.component.html',
  styleUrls: ['./nearhub.component.scss'],
})
export class NearhubComponent  implements OnInit {
  @Input() slides:any;
  swiperModules = [IonicSlides];
  azimageUrl:any='https://everdevuat.blob.core.windows.net/hubs/';

  constructor( private _bh:BookingService) { }

  ngOnInit() {
    this.getbikehubs()
  }
  getbikehubs(){
    this._bh.getbikehubs(this.slides).subscribe((res)=>{
      console.log(res)
      //ProfileImage
      this.slides=res;
  })
  }  
 
}
