import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-mart',
  templateUrl: './super-mart.page.html',
  styleUrls: ['./super-mart.page.scss'],
})
export class SuperMartPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['tab'])
  }

  goToBurger(){
    this.router.navigate(['burger-details'])
  }

}
