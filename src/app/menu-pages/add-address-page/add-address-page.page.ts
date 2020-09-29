import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address-page',
  templateUrl: './add-address-page.page.html',
  styleUrls: ['./add-address-page.page.scss'],
})
export class AddAddressPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['location-page'])
  }

}
