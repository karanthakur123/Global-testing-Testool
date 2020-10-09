import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/services/auth.service';

import {Router, ActivatedRoute, Params} from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



var company_name;
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]

})

export class TestComponent implements OnInit {
  company:string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router :Router
      ) { 

    this.activatedRoute.queryParams.subscribe(params => {
      var date = params['company_name'];
  
      console.log(date);
      company_name=date; // Print the parameter to the console. 
    });

  }
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login']);
  
  }
  ngOnInit() {
     this.company=company_name;
          }

}
