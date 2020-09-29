import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reset2Page } from './reset2.page';

const routes: Routes = [
  {
    path: '',
    component: Reset2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reset2PageRoutingModule {}
