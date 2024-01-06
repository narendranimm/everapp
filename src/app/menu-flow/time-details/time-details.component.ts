import { Component, ElementRef, OnInit, ViewChild , OnDestroy} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonAccordionGroup } from '@ionic/angular';
import { Observable, Subscription, interval, map, timer } from 'rxjs';
import { UserData } from 'src/app/providers/user-data';
import { OrderService } from 'src/app/services/Order.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-time-details',
  templateUrl: './time-details.component.html',
  styleUrls: ['./time-details.component.scss'],
})
export class TimeDetailsComponent implements OnInit, OnDestroy {
  show=false;
  private subscription!: Subscription;
  azimageUrl:any=environment.azimageUrl_hub;
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
  countDown!: Subscription;
  countDown$!: Observable<any>;
  counter = 0;
  tick = 300; //(interval for the timer in (Milliseconds))
 bookingNo:any=null;
 ProductDetails:any;
  constructor(private _pd:OrderService,private a_router:ActivatedRoute,private storage:UserData,private router:Router) {
    this.storage.getuser().then(res => {
      if (res !== null) {

        let data = res;
        const id = res.UserID;
        this.getDetails(id);
      }
    })
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
  
  

  getDetails(id:number) {
    this._pd.getUserCurrentBooking(id).subscribe((res: any) => {
      console.log(res)
      this.ProductDetails = res;
      if (res) {
        this.showCounter();
  
        this.getTimeDifference(res.BookingStartDate, res.BookingEndDate)
      }
      else{
        this.router.navigateByUrl('/my-booking')
      }
  
    })
  }
  extendplan(){
    console.log(this.ProductDetails)
    this.storage.setNew('extendplandata',this.ProductDetails)
    this.router.navigateByUrl('/currentplan/slot')
  }
  showCounter(){
    let dateObject:any = new Date(this.ProductDetails.BookingStartDate);
    let dateObject2:any = new Date(this.ProductDetails.BookingEndDate);
    this.counter = Math.floor((dateObject.getTime()- dateObject2.getTime()) / 1000);

    // Using the timer function to create an observable that decrements the counter value at a fixed interval
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);

    // Using the interval function to create an observable that emits values at a fixed interval
    this.countDown$ = interval(1000).pipe(
      map(() => {
        // Calculating the remaining time in seconds
        return Math.floor(
          (dateObject.getTime()- dateObject2.getTime()) / 1000
        );
      })
    );
  }

  ngOnDestroy() {
    // this.countDown = 'nuill';
  }

}
