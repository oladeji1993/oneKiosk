import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BurgerDetailsPageRoutingModule } from './burger-details-routing.module';

import { BurgerDetailsPage } from './burger-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BurgerDetailsPageRoutingModule
  ],
  declarations: [BurgerDetailsPage]
})
export class BurgerDetailsPageModule {}
