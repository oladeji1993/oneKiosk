import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAddressPagePage } from './add-address-page.page';

const routes: Routes = [
  {
    path: '',
    component: AddAddressPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAddressPagePageRoutingModule {}
