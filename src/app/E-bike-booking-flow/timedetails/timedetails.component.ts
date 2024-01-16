import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/providers/user-data';
import { OrderService } from 'src/app/services/Order.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-timedetails',
  templateUrl: './timedetails.component.html',
  styleUrls: ['./timedetails.component.scss'],
})
export class TimedetailsComponent  implements OnInit {
  bookingNo:any;
  ProductDetails:any;
  azimageUrl: any = environment.azimageUrl_hub;
  constructor(private _pd:OrderService,private a_router:ActivatedRoute,private userdata:UserData) {
    this.userdata.getId('bookingNo').then(data => {
      if (data !== null) {
        this.bookingNo = data;
        this.getDetails()
      }
    })
   }

  ngOnInit() {
   
  }
  getDetails() {
    this._pd.getordersummeryByBookingNo(this.bookingNo).subscribe((res: any) => {
      console.log(res)
      this.ProductDetails = res;
      

    })
  }


















  //timer section
  time: number = 0;
  display:any ;
  interval:any;





 startTimer() {
    console.log("=====>");
    this.interval = setInterval(() => {
      if (this.time === 0) {
        this.time++;
      } else {
        this.time++;
      }
      this.display=this.transform( this.time)
    }, 1000);
  }
  transform(value: number): string {
    var sec_num = value; 
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = 0;}
    if (minutes < 10) {minutes = 0;}
    if (seconds < 10) {seconds = 0;}
    return hours+':'+minutes+':'+seconds;
  }
  pauseTimer() {
    clearInterval(this.interval);
  }

}
