import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.page.html',
  styleUrls: ['./about-us-page.page.scss'],
})
export class AboutUsPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['tab'])
  }

}
