import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';
const routes: Routes = [
  {
    path: 'tablinks',
    component: TablinksPage,
    children: [
      {
        path: 'Ever',
        redirectTo:'/homepage'
      },
      // {
      //   path: 'evrental',
      //   loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      // },
      {
        path: 'evrental',
        redirectTo:'/homepage'
      },
      {
        path: 'swap',
        redirectTo:'/homepage'
      },
      {
        path: 'services',
        redirectTo:'/homepage'
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
