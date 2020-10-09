import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/services/auth.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, FormGroup,FormControl,FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Test1 } from '../auth/services/test';


var companyname;
var location2;
var t=[];

@Component({
  selector: 'app-update-noise',
  templateUrl: './update-noise.component.html',
  styleUrls: ['./update-noise.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]

})
export class UpdateNoiseComponent implements OnInit {
  
  location1:string;
  com:string;
  testForm: FormGroup;
  data:object

  
  constructor(
    private fb: FormBuilder,
    private authService : AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,


  ) {  
    this.activatedRoute.queryParams.subscribe(params => {
    var unit=params['unit'];
    var l_max=params['l_max'];
    var l_min=params['l_min'];
    var l_eq=params['l_eq'];
    var location=params['location'];
    var company_name=params['company_name'];
    var id=params['id'];

    console.log("unit"+unit);
    console.log("unit"+l_max);
    console.log("unit"+l_min);
    console.log("unit"+l_eq);
    console.log("unit"+company_name);
    console.log("unit"+location);
    console.log("unit"+id);


    t=[unit,l_max,l_min,l_eq,company_name,location,id];
    console.log(t);
    
 
    
  });
  let playerName: string;
   
    
  }
  
  

  ngOnInit(){
    this.data=t;
    this.onupdate_create();
    
  }
  onupdate_create() {
    this.testForm = this.fb.group({
      location:t[5],
      unit: t[0],
      l_max:t[1],
      l_min:t[2],
      l_eq:t[3],
      company_name:t[4],
      id:t[6]
    })
  }
  onupdate() {
    console.log("coming...")
    console.log('location is..'+this.testForm.get('location').value);
   
    this.authService.onupdate_test({
      location: this.testForm.get('location').value,
      unit: this.testForm.get('unit').value,
      l_max:this.testForm.get('l_max').value,
      l_min:this.testForm.get('l_min').value,
      l_eq:this.testForm.get('l_eq').value,
      company_name:this.testForm.get('company_name').value,
      id:this.testForm.get('id').value


    }).subscribe(
      result => {
        
        if (result) {
          this.router.navigateByUrl('/backend/dashboard');
        }
      }
    )
  }
  logout() {
    localStorage.removeItem('currentUser');
  }

}
