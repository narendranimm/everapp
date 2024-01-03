import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrentplanPageRoutingModule } from './currentplan-routing.module';

import { CurrentplanPage } from './currentplan.page';
import { TimeDifferencePipe } from '../time-difference.pipe';
import { CustomDateTimePipe } from '../custom-date-time.pipe';
import { SlotbookingComponent } from './slotbooking/slotbooking.component';
import { FormatTimePipe } from '../format-time.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrentplanPageRoutingModule
  ],
  declarations: [CurrentplanPage,
    TimeDifferencePipe,
    CustomDateTimePipe,
    FormatTimePipe,
    SlotbookingComponent,
  ],
  providers: [
    DatePipe,  // Add DatePipe to the providers array
    // other services
  ],
})
export class CurrentplanPageModule {}
