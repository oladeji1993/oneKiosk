import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivacyPagePageRoutingModule } from './privacy-page-routing.module';

import { PrivacyPagePage } from './privacy-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivacyPagePageRoutingModule
  ],
  declarations: [PrivacyPagePage]
})
export class PrivacyPagePageModule {}
