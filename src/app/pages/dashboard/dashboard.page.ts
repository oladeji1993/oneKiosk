import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  goToSopermart(){
    this.router.navigate(['super-mart'])
  }

  goToProfile(){
    this.router.navigate(['profile-page'])
  }

  goToNotification(){
    this.router.navigate(['notification-page'])
  }

  goToLocation(){
    this.router.navigate(['location-page'])
  }

  goToAbout(){
    this.router.navigate(['about-us-page'])
  }

  goToPrivacy(){
    this.router.navigate(['privacy-page'])
  }

  
  goToHelp(){
    this.router.navigate(['help-page'])
  }

  
  goToSettings(){
    this.router.navigate(['settings-page'])
  }

  goToLogin(){
    this.router.navigate(['login'])
  }

  goToOrder(){
    this.router.navigate(['order-page'])
  }

}
