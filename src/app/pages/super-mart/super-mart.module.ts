import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperMartPageRoutingModule } from './super-mart-routing.module';

import { SuperMartPage } from './super-mart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperMartPageRoutingModule
  ],
  declarations: [SuperMartPage]
})
export class SuperMartPageModule {}
