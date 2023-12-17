import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductServicesService } from 'services/product-services/product-services.service';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.scss'],
})
export class BookingdetailsComponent  implements OnInit {
  taskId=123;
  bookingForm!:FormGroup;  
  ProductDetails:any
  constructor( private booking:BookingService,private bk:FormBuilder,private route: ActivatedRoute,private _pd:ProductServicesService) {
    this.taskId = route.snapshot.params["ID"];
    console.log("this is taskId value = "+ this.taskId);
    
  }


  ngOnInit() {
   
  }
  book(){
    const data = this.bookingForm.value;
    delete data['confirm'];
  
    console.log(this.bookingForm.value)
    
        
        
      }
     
}
