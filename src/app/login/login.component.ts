// ts

import { Component } from '@angular/core';
import {FormControl, FormGroup , Validators} from  '@angular/forms'
import {AuthorizeService} from '../authorize.service'
import { Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  text:'';
  constructor(private authorizeservice:AuthorizeService , private router: Router ) {}

  loginForm=new FormGroup({
    email: new FormControl('',[Validators.required , Validators.email]),
    password: new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(15) ])
  })

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  onLogin(){
    this.text=this.loginForm.value
    console.log(this.loginForm.value);
    this.authorizeservice.update("true")
    this.router.navigate(['employee'])

  }


   showSpinner=false;

   

}



