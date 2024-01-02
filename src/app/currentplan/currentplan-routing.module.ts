import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrentplanPage } from './currentplan.page';
import { SlotbookingComponent } from './slotbooking/slotbooking.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentplanPage
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
