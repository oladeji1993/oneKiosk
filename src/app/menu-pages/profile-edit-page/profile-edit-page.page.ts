import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit-page',
  templateUrl: './profile-edit-page.page.html',
  styleUrls: ['./profile-edit-page.page.scss'],
})
export class ProfileEditPagePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['profile-page'])
  }

  goToHome(){
    this.router.navigate(['tab'])
  }

}
