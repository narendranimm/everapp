import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
})
export class DatetimeComponent  implements OnInit {
  datetimeForm!:FormGroup;

   constructor( private booking:BookingService,private bk:FormBuilder,private user:UserData,private route: ActivatedRoute) {
    this.datetimeForm=this.bk.group({
      BookingStartDate:'',
      BookingEndDate:''
    })
    const taskId = route.snapshot.params["ID"];
    console.log("this is taskId value = "+ taskId);
  }
  ngOnInit(): void {
    
  }
  book(){
    const data = this.datetimeForm.value;
    delete data['confirm'];
    this.booking.book(data).subscribe((res:any)=>{
      
    })
    console.log(this.datetimeForm.value)
    
        
        
      }
}
