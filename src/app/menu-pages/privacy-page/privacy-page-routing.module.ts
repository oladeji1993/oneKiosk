import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivacyPagePage } from './privacy-page.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivacyPagePageRoutingModule {}
