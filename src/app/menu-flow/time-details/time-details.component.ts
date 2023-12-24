import { Component, ElementRef, OnInit, ViewChild , OnDestroy} from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';
import { Observable, Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-time-details',
  templateUrl: './time-details.component.html',
  styleUrls: ['./time-details.component.scss'],
})
export class TimeDetailsComponent implements OnInit, OnDestroy {
show=false;
private subscription!: Subscription;

public dateNow = new Date();
public dDay = new Date('Dec 24 2023 00:00:00');
milliSecondsInASecond = 1000;
hoursInADay = 24;
minutesInAnHour = 60;
SecondsInAMinute  = 60;

public timeDifference:any;
public secondsToDday:any;
public minutesToDday:any;
public hoursToDday:any;
public daysToDday:any;


private getTimeDifference () {
    this.timeDifference = this.dDay.getTime() - new  Date().getTime();
    this.allocateTimeUnits(this.timeDifference);
}

private allocateTimeUnits (timeDifference:any) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}

ngOnInit() {
   this.subscription = interval(1000)
       .subscribe(x => { this.getTimeDifference(); });
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}

}
