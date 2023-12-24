import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSlides } from '@ionic/angular';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';

@Component({
  selector: 'app-swap-battery-scroll',
  templateUrl: './swap-battery-scroll.component.html',
  styleUrls: ['./swap-battery-scroll.component.scss'],
})
export class SwapBatteryScrollComponent  implements OnInit {
   @Input() slides:any;
   swiperModules = [IonicSlides];
  constructor(private _bh:BookingService,private userdata:UserData,private router:Router) { }
  azimageUrl:any='https://everdevuat.blob.core.windows.net/hubs/';
  btryHubID:any=3503;
  ngOnInit() {
  this.getbatteryhubs()
  }
  gotohubdetails(id:number){
    this.userdata.setMain("hubid",id)
    
        this.router.navigateByUrl('/battery-station')
      }
  getbatteryhubs(){
    this._bh.getbattery(this.btryHubID).subscribe((res)=>{
      console.log(res)
      this.slides=res;
  })
  }  
}
