import { Component } from '@angular/core';
import {AuthorizeService} from '../authorize.service'
import { Router} from '@angular/router'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private _authservice:AuthorizeService , private router: Router){}

  toggle=true;

  // loggedIn(){
  //   this._authservice.loggedIn;
  // }

  // loggedOut(){
  //   this._authservice.loggedIn=false;
  //   this.router.navigate(['login'])
  // }

}
