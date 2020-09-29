import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsPagePage } from './about-us-page.page';

const routes: Routes = [
  {
    path: '',
    component: AboutUsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutUsPagePageRoutingModule {}
