import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EvrentalPageRoutingModule } from './evrental-routing.module';

import { EvrentalPage } from './evrental.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EvrentalPageRoutingModule
  ],
  declarations: [EvrentalPage]
})
export class EvrentalPageModule {}
