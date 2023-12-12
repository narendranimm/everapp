import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { UserData } from 'src/app/providers/user-data';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
})
export class DatetimeComponent  implements OnInit {
  datetimeForm!:FormGroup;
  ProductDetails:any;
  taskId:any;
   constructor( private booking:BookingService,private bk:FormBuilder,private user:UserData,private route: ActivatedRoute,private router:Router) {
    this.datetimeForm=this.bk.group({
      BookingStartDate:'',
      BookingEndDate:''
    })
    const taskId = route.snapshot.params["ID"];
    console.log("this is taskId value = "+ taskId);
  }
  ngOnInit(): void {
    
  }
  gotobooking(){
    this.user.setpId(this.ProductDetails.ProductID)
    this.router.navigateByUrl('/duration/{{ProductDetails.ProductID}}')
  }
  book(){
    const data = this.datetimeForm.value;
    delete data['confirm'];
    this.booking.book(this.taskId).subscribe((res:any)=>{
      console.log(res)
      this.ProductDetails=res;
    })
    console.log(this.datetimeForm.value)
    
        
        
      }
}
