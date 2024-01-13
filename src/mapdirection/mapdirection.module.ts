import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapdirectionPageRoutingModule } from './mapdirection-routing.module';

import { MapdirectionPage } from './mapdirection.page';
import { MapmarkerComponent } from './mapmarker/mapmarker.component';
import { MaptrackerComponent } from './maptracker/maptracker.component';
import { Gmaps1Component } from './gmaps1/gmaps1.component';
import { Gmaps2Component } from './gmaps2/gmaps2.component';
import { Directionbtwn2pointsComponent } from './directionbtwn2points/directionbtwn2points.component';
import { MapssettingsComponent } from './mapssettings/mapssettings.component';
import { GPlacesApiComponent } from './g-places-api/g-places-api.component';
import { FirbaseLiveTrackingComponent } from './firbase-live-tracking/firbase-live-tracking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapdirectionPageRoutingModule
  ],
  declarations: [MapdirectionPage,MapmarkerComponent,MaptrackerComponent,Gmaps1Component,
    FirbaseLiveTrackingComponent, GPlacesApiComponent,MapssettingsComponent,Gmaps2Component,Directionbtwn2pointsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MapdirectionPageModule {}
