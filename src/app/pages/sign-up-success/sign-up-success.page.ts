import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-success',
  templateUrl: './sign-up-success.page.html',
  styleUrls: ['./sign-up-success.page.scss'],
})
export class SignUpSuccessPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDashboard(){
    this.router.navigate(['login'])
  }

}
