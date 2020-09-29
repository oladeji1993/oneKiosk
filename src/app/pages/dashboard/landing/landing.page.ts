import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(
    private router: Router,
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }

  goToSopermart(){
    this.router.navigate(['super-mart'])
  }

  toggleMenu() {
    this.menuCtrl.open('dashboard-menu')
  }

}
