import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { toTypeScript } from '@angular/compiler';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})



export class EmployeeComponent implements OnInit {

  
  
 employee:any;
 employees =[];
 
  constructor(private https:HttpClient) { }

  showSpinner=true;
 
  ngOnInit() {
    this.https.get('https://dummy.restapiexample.com/api/v1/employees')
    .subscribe((res)=>{
      console.log("response",res);
      this.employee=res;
      this.employees=this.employee.data
      this.showSpinner=false;
      console.log("emplorres",this.employees)
    })    
  }

  

}


