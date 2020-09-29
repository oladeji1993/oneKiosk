import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAddressPagePageRoutingModule } from './add-address-page-routing.module';

import { AddAddressPagePage } from './add-address-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAddressPagePageRoutingModule
  ],
  declarations: [AddAddressPagePage]
})
export class AddAddressPagePageModule {}
