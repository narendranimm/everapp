import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateRange } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { DataservicesService } from 'src/app/dataservices.service';
import { UserData } from 'src/app/providers/user-data';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
})
export class DatetimeComponent implements OnInit {
  title = 'nar'
  @Input() BookingStartDate: any
  @Input() BookingEndDate: any

  datetimeForm!: FormGroup;
  ProductDetails: any;
  taskId: any;
  ProductID = 1000;
   str:any;
   end:any;
   strtime:any;
   endtime:any;
  constructor(private snackBar: MatSnackBar, private booking: BookingService, private bk: FormBuilder, private user: UserData, private route: ActivatedRoute, private router: Router, private dataService: DataservicesService) {


  }
  ngOnInit(): void {

  }

  save() {
    
    if (this.str != '' && this.end != '') {
      this.sendData();
      this.router.navigateByUrl('/slotbooking')
    }
    else {
      this.snackBar.open("Please Select a Slot");

    }
  }

  sendData() {
    const combinedData = {
      inputValue: this.str,
      inputValue1: this.end
    
    };
    console.log(this.str);
    console.log(this.end)
    this.dataService.setCombinedData(combinedData);
  }


  selectedDateRange!: DateRange<Date>;

  _onSelectedChange(date: Date): void {
    if (
      this.selectedDateRange &&
      this.selectedDateRange.start &&
      date > this.selectedDateRange.start &&
      !this.selectedDateRange.end
    ) {
      this.selectedDateRange = new DateRange(
        this.selectedDateRange.start,
        date
        
      );
   this.str=this.selectedDateRange.start
  this.end= this.selectedDateRange.end
      console.log(this.selectedDateRange.start)
      console.log(this.selectedDateRange.end)
  
    } else {
      this.selectedDateRange = new DateRange(date, null);
    }
  }

  
}
