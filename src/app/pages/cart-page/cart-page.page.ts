import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.page.html',
  styleUrls: ['./cart-page.page.scss'],
})
export class CartPagePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['burger-details'])
  }

  goToCheckOut(){
    this.router.navigate(['checkout-page'])
  }

}
