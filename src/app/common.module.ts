import { NgModule } from "@angular/core";
import { CustomDateTimePipe } from "./custom-date-time.pipe";
import { TimeDifferencePipe } from "./time-difference.pipe";
import { FilterPipe } from "./filter.pipe";
import { FormatTimePipe } from "./format-time.pipe";
import { EnablelocationComponent } from "./E-bike-booking-flow/enablelocation/enablelocation.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [ 
    MatToolbarModule, MatDialogModule, MatSidenavModule, MatButtonModule, MatCardModule,
    MatInputModule, MatFormFieldModule,
    MatIconModule,

],
  exports: [
    MatToolbarModule, MatDialogModule, MatSidenavModule, MatButtonModule, MatCardModule,
    MatInputModule, MatFormFieldModule,
    MatIconModule,
],

})
export class CommonImpModule{}
