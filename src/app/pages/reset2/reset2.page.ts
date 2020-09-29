import { SuccessModalComponent } from './../../components/success-modal/success-modal.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reset2',
  templateUrl: './reset2.page.html',
  styleUrls: ['./reset2.page.scss'],
})
export class Reset2Page implements OnInit {

  constructor(
    private router: Router,
    private modalController: ModalController,
    ) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['confirm-page']);
  }
  goToSuccess(){
    this.router.navigate(['success-modal']);
  }

  async lauchModal() {
    const modal = await this.modalController.create({
      component: SuccessModalComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
