import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from 'src/app/E-booking-flow-services/booking.service';
import { BottomsheetComponent } from 'src/app/bottomsheet/bottomsheet.component';
import { UserData } from 'src/app/providers/user-data';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
})
export class DurationComponent implements OnInit {
  customDate!: FormGroup;
  productId: any;
  ProductDetails: any

  taskId: any;
  selectedValue!: string;
  selectedValue1!: string;
  foods: Food[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
  ];
  foods1: Food[] = [
    { value: 'hours', viewValue: 'hours' },
    { value: 'days', viewValue: 'days' },
    { value: 'weeks', viewValue: 'weeks' },

  ];
  constructor(private snackBar: MatSnackBar, private router: Router, private bookingservice: BookingService, private bk: FormBuilder, private route: ActivatedRoute, private user: UserData) {
    this.customDate = this.bk.group({
      date: ['', Validators.required],
      time: ['', Validators.required]
    })
  }

  toppings = new FormControl('');

  toppingList: string[] = ['hours', 'days', 'weeks'];
  toppings1 = new FormControl('');

  toppingList1: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];
  ngOnInit() {
    this.user.getId('pId').then(data => this.productId = data);

  }
  duration() {
    const data = this.customDate.value;
    console.log(this.customDate.value)
  }
  book() {
    const data = this.customDate.value;
    if (!this.customDate.valid) {
      this.customDate.markAllAsTouched();
      this.snackBar.open(" All fields are required ");
    } else {
      console.log(this.customDate.value)
      this.bookingservice.book(this.productId).subscribe(
        (res: any) => {
          this.ProductDetails = res
          this.snackBar.open(JSON.stringify(res.message));
          // this.snackBar.open(JSON.stringify('Booked successfully'));
          this.router.navigateByUrl('/booking-summary');
        }
      )
    }
  }

}
