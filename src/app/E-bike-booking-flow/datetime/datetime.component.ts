import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  startdate: string = '';
  endatedate: string = '';
  datetimeForm!: FormGroup;
  ProductDetails: any;
  taskId: any;
  ProductID = 1000;
  constructor(private snackBar: MatSnackBar, private booking: BookingService, private bk: FormBuilder, private user: UserData, private route: ActivatedRoute, private router: Router, private dataService: DataservicesService) {


  }
  ngOnInit(): void {

  }

  save() {
    
    if (this.startdate != '' && this.endatedate != '') {
      this.sendData();
      this.router.navigateByUrl('/slotbooking')
    }
    else {
      this.snackBar.open("Please Select a Slot");

    }
  }

  sendData() {
    const combinedData = {
      inputValue: this.startdate,
      inputValue1: this.endatedate
    };
    this.dataService.setCombinedData(combinedData);
  }
}
