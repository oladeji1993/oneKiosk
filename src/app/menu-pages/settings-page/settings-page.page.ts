import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.page.html',
  styleUrls: ['./settings-page.page.scss'],
})
export class SettingsPagePage implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }


  back(){
    this.router.navigate(['tab'])
  }

}
