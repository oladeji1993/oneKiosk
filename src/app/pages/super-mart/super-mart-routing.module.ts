import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperMartPage } from './super-mart.page';

const routes: Routes = [
  {
    path: '',
    component: SuperMartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperMartPageRoutingModule {}
