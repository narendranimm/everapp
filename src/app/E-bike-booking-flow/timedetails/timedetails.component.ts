import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timedetails',
  templateUrl: './timedetails.component.html',
  styleUrls: ['./timedetails.component.scss'],
})
export class TimedetailsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

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
