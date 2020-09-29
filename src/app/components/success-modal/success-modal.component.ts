import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss'],
})
export class SuccessModalComponent implements OnInit {

  constructor(
    private router: Router,
    private modalController: ModalController,
    ) { }

  ngOnInit() {}


  goToLogin(){
    this.router.navigate(['login'])
    this.modalController.dismiss();
  }

}
