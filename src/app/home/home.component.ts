import { Component } from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [
    {value: 'Hyderabad', viewValue: 'Hyderabad'},
    {value: 'vizaq', viewValue: 'vizaq'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
