import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {AuthorizeService} from '../authorize.service'

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  id:any;
  info;

  showSpinner=true;
 
  constructor(private router: ActivatedRoute , private detail: AuthorizeService) { }

  ngOnInit(){
     this.id=this.router.snapshot.params['id'];
     this.getDetails();
  }

  getDetails(){
     this.detail.getCurrentDeatils(this.id).subscribe(data=>{
       console.log(data);
       this.info=data;
       this.showSpinner=false;
       console.log(this.info)
     })
  }
}



