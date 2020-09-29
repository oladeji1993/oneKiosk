import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-confirm',
  templateUrl: './sign-up-confirm.page.html',
  styleUrls: ['./sign-up-confirm.page.scss'],
})
export class SignUpConfirmPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['sign-up'])
  }
  goToAdress(){
    this.router.navigate(['address'])
  }

}
