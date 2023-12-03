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

  constructor( private _bh:BookingService) { }
 bikeHubID:any=3502;
  ngOnInit() {
  
  }
  getbikehubs(){
    this._bh.getbikehubs(this.slides).subscribe((res)=>{
      console.log(res)
      this.slides=res;
  })
  }  
 
}
