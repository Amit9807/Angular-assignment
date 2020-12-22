// active

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthorizeService} from './authorize.service'

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(private authorizeservice:AuthorizeService , private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     if(this.authorizeservice.isAdminRights()){
       return true;
     }
     else{
       alert("You may have to login first , Redirecting to Login");
       this.router.navigate(['login'])
     }
  }
  
}



