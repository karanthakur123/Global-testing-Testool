import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/services/auth.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, FormGroup,FormControl,FormsModule } from '@angular/forms';
import {Yo} from '../auth/services/yo';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



var companyname;
var location2;
var t=[];
@Component({
  selector: 'app-update-water-detail',
  templateUrl: './update-water-detail.component.html',
  styleUrls: ['./update-water-detail.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]

})
export class UpdateWaterDetailComponent implements OnInit {

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
    var parameters=params['parameters'];
    var test_method=params['test_method'];
    var results=params['results'];
    var units=params['units'];
    var desirable=params['desirable'];
    var company_name=params['company_name'];
    var permissible=params['permissible'];
    var max_limit=params['max_limit'];
    var area=params['area'];


    
    
    
    var id=params['id'];

    console.log("parameters "+parameters);
    console.log("test_method "+test_method);
    console.log("results "+results);
    console.log("units "+units);
    console.log("desirable "+desirable);
    console.log("permissible "+permissible);
    console.log("max_limit "+max_limit);
    console.log("area "+area);
    console.log("id "+id);
     console.log("company_name "+company_name);

    

    t=[parameters,test_method,results,units,desirable,permissible,max_limit,area,id,company_name];
    console.log(t);
    
 
    
  });
   
    
  }
  
  

  ngOnInit(){
    this.data=t;
    this.onupdate_create();
    
  }
  onupdate_create() {
    this.testForm = this.fb.group({
      parameters:t[0],
      test_method: t[1],
      results:t[2],
      units:t[3],
      desirable:t[4],
      permissible:t[5],
      max_limit:t[6],
      area:t[7],
      id:t[8],
      company_name:t[9]
    })
  }
  onupdate() {
    console.log("coming...")
    console.log('parameters is..'+this.testForm.get('parameters').value);
   
    this.authService.onupdate_test_water({
      parameters: this.testForm.get('parameters').value,
      test_method: this.testForm.get('test_method').value,
      results:this.testForm.get('results').value,
      units:this.testForm.get('units').value,
      desirable:this.testForm.get('desirable').value,
      permissible:this.testForm.get('permissible').value,
      max_limit:this.testForm.get('max_limit').value,
      area:this.testForm.get('area').value,
      id:this.testForm.get('id').value,
      company_name:this.testForm.get('company_name').value




    }).subscribe(
      result => {
        
        if (result) {
          this.router.navigateByUrl('/water-detail');
        }
      }
    )
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login']);
  
  }

}
