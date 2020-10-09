import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {AuthService} from '../auth/services/auth.service';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

var company_name;
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]

})
export class LocationComponent implements OnInit {


  com: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { 

    this.activatedRoute.queryParams.subscribe(params => {
   
      var company=params['company'];
      console.log("Company name is" +company);
      company_name=company;
   
       // Print the parameter to the console. 
    });
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login']);
  
  }
  ngOnInit() {
    this.com=company_name;
  }

}
