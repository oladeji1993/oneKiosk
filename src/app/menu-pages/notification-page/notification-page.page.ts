import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.page.html',
  styleUrls: ['./notification-page.page.scss'],
})
export class NotificationPagePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['tab'])
  }

}
