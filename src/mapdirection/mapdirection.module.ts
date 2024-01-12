import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapdirectionPageRoutingModule } from './mapdirection-routing.module';

import { MapdirectionPage } from './mapdirection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapdirectionPageRoutingModule
  ],
  declarations: [MapdirectionPage]
})
export class MapdirectionPageModule {}
