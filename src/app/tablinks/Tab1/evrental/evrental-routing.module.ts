import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvrentalPage } from './evrental.page';

const routes: Routes = [
  {
    path: '',
    component: EvrentalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvrentalPageRoutingModule {}
