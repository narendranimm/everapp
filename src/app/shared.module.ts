import { NgModule } from "@angular/core";
import { CustomDateTimePipe } from "./custom-date-time.pipe";
import { TimeDifferencePipe } from "./time-difference.pipe";
import { FilterPipe } from "./filter.pipe";
import { FormatTimePipe } from "./format-time.pipe";
import { TimeampmPipe } from './timeampm.pipe';

@NgModule({
  declarations: [
    CustomDateTimePipe,
    TimeDifferencePipe,
    FilterPipe,
    FormatTimePipe,
    TimeampmPipe

  ],
  exports: [
    CustomDateTimePipe,
    TimeDifferencePipe,
    FilterPipe,
    FormatTimePipe,
    TimeampmPipe

  ],
  providers: [
    CustomDateTimePipe,
    TimeDifferencePipe,
    FilterPipe,
    FormatTimePipe,
  ],
})
export class SharedModule { }
