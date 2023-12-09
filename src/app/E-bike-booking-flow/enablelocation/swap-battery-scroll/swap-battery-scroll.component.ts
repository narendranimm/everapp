import { Component, Input, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';

@Component({
  selector: 'app-swap-battery-scroll',
  templateUrl: './swap-battery-scroll.component.html',
  styleUrls: ['./swap-battery-scroll.component.scss'],
})
export class SwapBatteryScrollComponent  implements OnInit {
   @Input() slides:any;
   swiperModules = [IonicSlides];
  constructor(private _bh:BookingService) { }
  azimageUrl:any='https://everdevuat.blob.core.windows.net/hubs/';
  ngOnInit() {
  this.getbatteryhubs()
  }
  getbatteryhubs(){
    this._bh.getbattery(this.slides).subscribe((res)=>{
      console.log(res)
      this.slides=res;
  })
  }  
}
