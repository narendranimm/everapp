import { Component, ElementRef, OnInit, ViewChild , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonAccordionGroup } from '@ionic/angular';
import { Observable, Subscription, interval, map } from 'rxjs';
import { OrderService } from 'src/app/services/Order.service';

@Component({
  selector: 'app-time-details',
  templateUrl: './time-details.component.html',
  styleUrls: ['./time-details.component.scss'],
})
export class TimeDetailsComponent implements OnInit, OnDestroy {
show=false;
private subscription!: Subscription;

public dateNow = new Date();
milliSecondsInASecond = 1000;
hoursInADay = 24;
minutesInAnHour = 60;
SecondsInAMinute  = 60;
public dDay = new Date('Dec 24 2023 00:00:00');
public timeDifference:any;
public secondsToDday:any;
public minutesToDday:any;
public hoursToDday:any;
public daysToDday:any;
dateDifference:any;
constructor(private _pd:OrderService,private a_router:ActivatedRoute) {
  let id=a_router.snapshot.params["ID"];
    this.getDetails(id)
   }
  
private getTimeDifference (s_dat:any,e_dat:any) {
  const date1: Date = new Date(s_dat);
  const date2: Date = new Date(e_dat);
    this.timeDifference =  date1.getTime() - date2.getTime()
    console.log(this.timeDifference)
    this.allocateTimeUnits(this.timeDifference);
}

private allocateTimeUnits (timeDifference:any) {
   this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
   this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
   this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}

ngOnInit() {
   
}

ngOnDestroy() {
} 
 bookingNo:any=null;
ProductDetails:any;


getDetails(id:string) {
  this._pd.getordersummeryByBookingNo(id).subscribe((res: any) => {
    console.log(res)
    this.ProductDetails = res;
    if (res) {

      this.gettimedfrnc(res.BookingStartDate, res.BookingEndDate)
      this.getTimeDifference(res.BookingStartDate, res.BookingEndDate)
    }

  })
}
gettimedfrnc(startdate: any, endate: any) {
  // Convert date-time strings to Date objects
  const date1: Date = new Date(startdate);
  const date2: Date = new Date(endate);

  // Calculate the difference between the two date-times in milliseconds
  const dateTimeDifference: number = date1.getTime() - date2.getTime();

  // Convert milliseconds to days, hours, and minutes
  const days: number = Math.floor(dateTimeDifference / (1000 * 60 * 60 * 24))
  const hours: number = Math.floor((dateTimeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes: number = Math.floor((dateTimeDifference % (1000 * 60 * 60)) / (1000 * 60));
  // console.log(`Difference between the two date-times: ${days} days, ${hours} hours, ${minutes} minutes`);
  switch (true) {
    case days !== 0:
      this.dateDifference = `${days} day(s)`;
      break;
    case hours !== 0:
      this.dateDifference =`${hours} hour(s)`;
      break;
    case minutes !== 0:
      this.dateDifference =`${minutes} minute(s)`;
      break;
    default:
      break;
  }
}

}
