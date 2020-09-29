import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutUsPagePageRoutingModule } from './about-us-page-routing.module';

import { AboutUsPagePage } from './about-us-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutUsPagePageRoutingModule
  ],
  declarations: [AboutUsPagePage]
})
export class AboutUsPagePageModule {}
