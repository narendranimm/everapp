import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/Order.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-previous-booking',
  templateUrl: './previous-booking.component.html',
  styleUrls: ['./previous-booking.component.scss'],
})
export class PreviousBookingComponent  implements OnInit {
  bookingNo:any=null;
  ProductDetails:any;
  hubid:number=3507
  showbike:boolean=false;
  constructor(private _pd:OrderService,private a_router:ActivatedRoute,private loader:LoadingService) {
    this.showbike=true
    this.a_router.params.subscribe((params) => {
     let id = params['ID'];
      this.hubid = params['typeid'];
      this.getDetails(id);
    });

   }

  ngOnInit() {}
  getDetails(id:string) {
    this.loader.simpleLoader('Loading')
    this._pd.getordersummeryByBookingNo(id).subscribe((res: any) => {
      console.log(res)
      this.ProductDetails = res;
      this.loader.dismissLoader();
      if (res) {

        // this.gettimedfrnc(res.BookingStartDate, res.BookingEndDate)
      }

    },
    (error)=>{

      this.loader.dismissLoader();
    }
    )
  }

}
