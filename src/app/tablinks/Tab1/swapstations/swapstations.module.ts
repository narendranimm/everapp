import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SwapstationsPageRoutingModule } from './swapstations-routing.module';

import { SwapstationsPage } from './swapstations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwapstationsPageRoutingModule
  ],
  declarations: [SwapstationsPage]
})
export class SwapstationsPageModule {}
