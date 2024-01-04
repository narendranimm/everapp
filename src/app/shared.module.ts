import { NgModule } from "@angular/core";
import { CustomDateTimePipe } from "./custom-date-time.pipe";
import { TimeDifferencePipe } from "./time-difference.pipe";
import { FilterPipe } from "./filter.pipe";
import { FormatTimePipe } from "./format-time.pipe";
import { EnablelocationComponent } from "./E-bike-booking-flow/enablelocation/enablelocation.component";

@NgModule({
  declarations: [ 
        CustomDateTimePipe,
        TimeDifferencePipe,
        FilterPipe,
    FormatTimePipe,

],
  exports: [
        CustomDateTimePipe,
        TimeDifferencePipe,
        FilterPipe,        
        FormatTimePipe,

],
providers: [
    CustomDateTimePipe,
    TimeDifferencePipe,
    FilterPipe,        
    FormatTimePipe,
],
})
export class SharedModule{}
