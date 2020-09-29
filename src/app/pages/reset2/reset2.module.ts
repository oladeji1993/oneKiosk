import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reset2PageRoutingModule } from './reset2-routing.module';

import { Reset2Page } from './reset2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reset2PageRoutingModule
  ],
  declarations: [Reset2Page]
})
export class Reset2PageModule {}
