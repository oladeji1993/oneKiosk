import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validator, Validators} from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  signUpForm: FormGroup;
  userData = {"firstName": "", "lastName": "", "email": "", "phoneNumber": "", "password": "", "checkBox": false };

  constructor(
    private router: Router
    ) { }

  ngOnInit() {

    let emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.pattern(emailPattern)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),


    })

  }

  back() {
    this.router.navigate(["login"])
  }

  goToConfirm(){
    console.log(this.userData)
    this.router.navigate(["sign-up-confirm"])
  }

  goToSign(){
    this.router.navigate(["login"])
  }

  checkboxChange() {
    console.log(this.userData.checkBox)
  }

}
