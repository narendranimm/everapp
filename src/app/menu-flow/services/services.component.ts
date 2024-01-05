import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/providers/user-data';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  startTime: any;
  endTime: any;

  constructor(private user: UserData,private router: Router,) {
    this.user.getId('startTime').then(data => {
      if (data !== null) {
        this.startTime = data;
        console.log(this.startTime)
      };
    });
    this.user.getId('endTime').then(data => {
      if (data !== null) {
        this.endTime = data;
        console.log(this.endTime)
      };
    });
  }

  ngOnInit() { }

  Extendplan(){
    const startTime = new Date(this.startTime).getTime();
    const endTime = new Date(this.endTime).getTime();
    if (!isNaN(startTime) && !isNaN(endTime)) {
      const getDate = new Date().getTime();
      if(getDate <= endTime){
        this.router.navigateByUrl('/currentplan');
      }else{
        this.router.navigateByUrl('/my-booking');
      }
    }
    else{

    }
  }
}
