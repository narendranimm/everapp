import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentplanPage } from './currentplan.page';
import { SlotbookingComponent } from './slotbooking/slotbooking.component';
import { CurrentplandetailsComponent } from '../currentplandetails/currentplandetails.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentplanPage
  },
  {
    path: 'plan',
    component: CurrentplandetailsComponent
  },
  {
    path: 'slot',
    component: SlotbookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrentplanPageRoutingModule {}
