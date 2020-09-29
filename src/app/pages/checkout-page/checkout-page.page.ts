import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.page.html',
  styleUrls: ['./checkout-page.page.scss'],
})
export class CheckoutPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['cart-page'])
  }

  goToCartSuccess(){
    this.router.navigate(['cart-success'])
  }

}
