import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';
const routes: Routes = [
  
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    loadChildren: () => import('./Tab1/homepage/homepage.module').then( m => m.HomepagePageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./Tab1/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'evrental',
    loadChildren: () => import('./Tab1/evrental/evrental.module').then( m => m.EvrentalPageModule)
  },
  {
    path: 'swapstations',
    loadChildren: () => import('./Tab1/swapstations/swapstations.module').then( m => m.SwapstationsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
