import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burger-details',
  templateUrl: './burger-details.page.html',
  styleUrls: ['./burger-details.page.scss'],
})
export class BurgerDetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['explore'])
  }

  goToreview(){
    this.router.navigate(['reviews'])
  }

  goToCart(){
    this.router.navigate(['cart-page'])
  }

}
