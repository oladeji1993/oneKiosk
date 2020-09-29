import { AddressPageModule } from './../address/address.module';
import { DashboardPage } from './../dashboard/dashboard.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabPage } from './tab.page';
import { CartPagePageRoutingModule } from '../cart-page/cart-page-routing.module';

const routes: Routes = [
  {
    path: '',
    component: TabPage,
    children:[
      {
        path:'dashboard',
        loadChildren:() => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },

      {
        path:'explore',
        loadChildren:() => import('../explore/explore.module').then(m => m.ExplorePageModule)
      },

      {
        path:'cart-page',
        loadChildren:() => import('../cart-page/cart-page.module').then(m => m.CartPagePageModule)
      },

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
