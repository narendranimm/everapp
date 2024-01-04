import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentplanPageRoutingModule } from './currentplan-routing.module';

import { SlotbookingComponent } from './slotbooking/slotbooking.component';
import { SharedModule } from '../shared.module';
import { CustomDateTimePipe } from '../custom-date-time.pipe';
import { TimeDifferencePipe } from '../time-difference.pipe';
import { FormatTimePipe } from '../format-time.pipe';
import { FilterPipe } from '../filter.pipe';
import { CurrentplandetailsComponent } from '../currentplandetails/currentplandetails.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentplanPageRoutingModule,
    SharedModule ,
  ],
  declarations: [
    CurrentplandetailsComponent,
    SlotbookingComponent,
  ],
  providers: [
    DatePipe, 
    // other services
  ],
})
export class CurrentplanPageModule {}
