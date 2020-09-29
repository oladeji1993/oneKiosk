import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  goToEdit(){
    this.router.navigate(['profile-edit-page'])
  }

  back(){
    this.router.navigate(['tab'])
  }

}
