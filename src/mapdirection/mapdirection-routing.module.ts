import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapdirectionPage } from './mapdirection.page';
import { MapmarkerComponent } from './mapmarker/mapmarker.component';
import { MaptrackerComponent } from './maptracker/maptracker.component';
import { Gmaps1Component } from './gmaps1/gmaps1.component';
import { Gmaps2Component } from './gmaps2/gmaps2.component';
import { Directionbtwn2pointsComponent } from './directionbtwn2points/directionbtwn2points.component';
import { MapssettingsComponent } from './mapssettings/mapssettings.component';
import { GPlacesApiComponent } from './g-places-api/g-places-api.component';
import { FirbaseLiveTrackingComponent } from './firbase-live-tracking/firbase-live-tracking.component';

const routes: Routes = [
  {
    path: 'no',
    component: MapdirectionPage
  },
  {
    path: 'dr',
    component: MapmarkerComponent
  },
  {
    path: 'tr',
    component: MaptrackerComponent
  },
  {
    path: 'g1',
    component: Gmaps1Component
  },
  {
    path: 'g2',
    component: Gmaps2Component
  },
  {
    path: 'g3',
    component: Directionbtwn2pointsComponent,pathMatch:'full'
  },
  {
    path: 'g4',
    component: MapssettingsComponent
  },
  {
    path: 'g5',
    component: GPlacesApiComponent
  },
  {
    path: 'g5',
    component: FirbaseLiveTrackingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapdirectionPageRoutingModule {}
