import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatBottomSheet, MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { BottomsheetComponent } from 'src/app/bottomsheet/bottomsheet.component';
import { UserData } from 'src/app/providers/user-data';
@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
})
export class DurationComponent  implements OnInit {
  customDate!:FormGroup;
  productId:any;
  ProductDetails:any

  taskId:any; 
  constructor(private snackBar: MatSnackBar, private router:Router,private booking:BookingService,private bk:FormBuilder,private route: ActivatedRoute,private user:UserData) {
    this.customDate=this.bk.group({
      date:'',
      time:''
    })
    const taskId = route.snapshot.params["ID"];
    console.log("this is taskId value = "+ taskId);
  }

 
  ngOnInit() {
    console.log(this.user.getId('pId'))
    this.user.getId('pId')
    .then(data => 
      this.productId=data
     
      );
      console.log(this.productId)

    
  }
  book(){
    const data = this.customDate.value;
    console.log(this.customDate.value)
    this.booking.book(this.productId).subscribe((res:any)=>{
      this.ProductDetails=res
      this.snackBar.open(JSON.stringify(res.message)
      );
  
      this.snackBar.open(JSON.stringify('Booked successfully'));
      
    })
   
  
    
 
        
      }
      // getbook(){
      //   const data = this.bookingForm.value;
      //   delete data['confirm'];
      //   this.booking.getbook(data).subscribe((res:any)=>{
      //     this.productDetails=res
      //     console.log(res)
      //     this.snackBar.open(JSON.stringify(res.message)
      //     );
      //   })
        // console.log(this.bookingForm.value)
        
      
            
        //   }
  // constructor(private _bottomSheet: MatBottomSheet) {}

  // openBottomSheet(): void {
  //   this._bottomSheet.open(BottomsheetComponent);
  // }
  // customPopoverOptions = {

  // };
  // ngOnInit() {}

}