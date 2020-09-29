import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-page',
  templateUrl: './confirm-page.page.html',
  styleUrls: ['./confirm-page.page.scss'],
})
export class ConfirmPagePage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['reset'])
  }
  goToReset(){
    this.router.navigate(['reset2'])
  }

}
