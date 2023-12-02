import { Component, Input, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-swap-battery-scroll',
  templateUrl: './swap-battery-scroll.component.html',
  styleUrls: ['./swap-battery-scroll.component.scss'],
})
export class SwapBatteryScrollComponent  implements OnInit {
   @Input() slides:any[] =[]
   swiperModules = [IonicSlides];
  constructor() { }

  ngOnInit() {
  }

}
