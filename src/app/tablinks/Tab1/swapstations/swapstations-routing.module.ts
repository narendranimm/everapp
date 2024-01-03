import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SwapstationsPage } from './swapstations.page';

const routes: Routes = [
  {
    path: '',
    component: SwapstationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SwapstationsPageRoutingModule {}
