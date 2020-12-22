// ts

import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs'
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthorizeService {



  private content=new BehaviorSubject<string>("false");
  public share=this.content.asObservable();

  text:[];
  
  constructor(private https:HttpClient) { }

  update(val){
    this.text=val
    console.log("update ",+this.text)
  }

  isAdminRights(){
    if(this.text==undefined){
      console.log("isAdminRight1mf",this.text)
      return false;
    }
    else{
      console.log("isAdminRight2",this.text);
      return true;
    }
  }

  getCurrentDeatils(id){
    return this.https.get('https://dummy.restapiexample.com/api/v1/employee/'+id)
    .pipe(map(res => res));
  }
  
  loggedIn=true;

}


