import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/Order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserData } from '../providers/user-data';
import { environment } from 'src/environments/environment.prod';
import { timer, Subscription, Observable, interval } from 'rxjs';
import { Pipe, PipeTransform } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-currentplan',
  templateUrl: './currentplan.component.html',
  styleUrls: ['./currentplan.component.scss'],
})
export class CurrentplanComponent  implements OnInit {
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
   
    }
    

  ngOnInit() {
     
  }
  
  
}
