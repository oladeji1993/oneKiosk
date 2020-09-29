import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-success',
  templateUrl: './cart-success.page.html',
  styleUrls: ['./cart-success.page.scss'],
})
export class CartSuccessPage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  goToHome(){
    this.router.navigate(['tab'])
  }


}
