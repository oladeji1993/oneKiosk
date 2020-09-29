import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-privacy-page',
  templateUrl: './privacy-page.page.html',
  styleUrls: ['./privacy-page.page.scss'],
})
export class PrivacyPagePage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['tab'])
  }

}
