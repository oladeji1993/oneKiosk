import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BurgerDetailsPage } from './burger-details.page';

const routes: Routes = [
  {
    path: '',
    component: BurgerDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BurgerDetailsPageRoutingModule {}
