import { Component, Inject, OnInit } from '@angular/core';
import { UserData } from 'src/app/providers/user-data';
import { OrderService } from 'src/app/services/Order.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
})
export class MyBookingsComponent implements OnInit {
  userid: any;
  ordersList: any;
  constructor(private or_service: OrderService, private userdata: UserData) {
    this.userdata.getuser().then(
      res => {
        this.userid = res.UserID;
        this.gerOrdersByUserID();
        console.log(this.userid)
      })
  }

  ngOnInit() {


  }
  gerOrdersByUserID() {
    this.or_service.getorderbyUserID(this.userid).subscribe(res => {
      this.ordersList = res;
      console.log(this.ordersList)
    })
  }
}
