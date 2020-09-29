import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.page.html',
  styleUrls: ['./order-page.page.scss'],
})
export class OrderPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['tab'])
  }

  goToStatus(){
    this.router.navigate(['order-status'])
  }


}
