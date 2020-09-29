import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.page.html',
  styleUrls: ['./help-page.page.scss'],
})
export class HelpPagePage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['tab'])
  }

}
