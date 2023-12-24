import { Component, Inject, OnInit } from '@angular/core';
import { UserData } from 'src/app/providers/user-data';
import { OrderService } from 'src/app/services/Order.service';
import { LoadingService } from 'src/app/services/loading.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
})
export class MyBookingsComponent implements OnInit {
  userid: any;
  ordersList: any;
  azimageUrl:any=environment.azimageUrl_hub;
  isRecords: boolean=false;


  constructor(private or_service: OrderService, private loader:LoadingService,
    private userdata: UserData) {
    this.userdata.getuser().then(
      res => {
        this.loader.simpleLoader('Loading....')
        this.userid = res.UserID;
        this.gerOrdersByUserID();
        console.log(this.userid)
      })
  }

  ngOnInit() {


  }
  gerOrdersByUserID() {
    this.or_service.getorderbyUserID(this.userid).subscribe(
      (res:any) => {
      this.ordersList = res;
      this.loader.dismissLoader();
    this.isRecords=  this.ordersList.length ==0 ?true:false;
      console.log(this.ordersList)
    },(error)=>{
      this.loader.dismissLoader();
    }
    )
  }
}
