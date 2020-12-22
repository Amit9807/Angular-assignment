// Routing

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component'
import {LoginComponent} from './login/login.component'
import {EmployeeDetailsComponent} from './employee-details/employee-details.component';
import {ActivateGuard} from './activate.guard'
import { from } from 'rxjs';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  } ,
 {
  path:'login',
  component: LoginComponent
 },
 {
  path:'employee',
  component: EmployeeComponent , canActivate:[ActivateGuard]
 },
 {
  path:'employees/:id',
  component: EmployeeDetailsComponent 
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
