import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/Order.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss'],
})
export class OffersComponent  implements OnInit {
  offers: any;

  constructor(private os:OrderService) { }

  ngOnInit() {this.getAll()}
  getAll(){
    this.os.getAlloffers().subscribe(res=>{
      console.log(res)
      this.offers=res;
    })

  }
  applyCoupon(id:number){

  }
}
