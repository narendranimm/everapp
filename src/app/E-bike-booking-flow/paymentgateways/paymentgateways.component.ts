import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paymentgateways',
  templateUrl: './paymentgateways.component.html',
  styleUrls: ['./paymentgateways.component.scss'],
})
export class PaymentgatewaysComponent  implements OnInit {
type:string=''
  constructor(private route:ActivatedRoute) { 

const id = route.snapshot.params["ID"];;

    switch (id) {
      case 100:
        this.type='bike'
        
        break;
    
      case 200:
        this.type='battery'
        
        break;
    
      case 300:
        this.type='wash'
        
        break;
    
      default:
        break;
    }
  }

  ngOnInit() {}

}
