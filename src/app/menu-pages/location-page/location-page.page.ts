import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.page.html',
  styleUrls: ['./location-page.page.scss'],
})
export class LocationPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  back(){
    this.router.navigate(['tab'])
  }

  goToAdress(){
    this.router.navigate(['add-address-page'])
  }

}
