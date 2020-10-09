import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/services/auth.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, FormGroup,FormControl,FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


var companyname;
var location2;
var t=[];
@Component({
  selector: 'app-update-light-detail',
  templateUrl: './update-light-detail.component.html',
  styleUrls: ['./update-light-detail.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]

})
export class UpdateLightDetailComponent implements OnInit {

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
    var location=params['location'];
    var unit=params['unit'];
    var inspection_area=params['inspection_area'];
    var normal_area=params['normal_area'];
    var area=params['area'];
    var lux=params['lux'];
    var company_name=params['company_name'];
    var id=params['id'];

    console.log("location "+location);
    console.log("unit "+unit);
    console.log("inspection_area "+inspection_area);
    console.log("normal_area "+normal_area);
    console.log("lux "+lux);
   
    console.log("area "+area);
    console.log("id "+id);
     console.log("company_name "+company_name);

    

    t=[location,unit,inspection_area,normal_area,lux,area,id,company_name];
    console.log(t);
    
 
    
  });
   
    
  }
  
  

  ngOnInit(){
    this.data=t;
    this.onupdate_create();
    
  }
  onupdate_create() {
    this.testForm = this.fb.group({
      location:t[0],
      unit: t[1],
      inspection_area:t[2],
      normal_area:t[3],
      lux:t[4],
      area:t[5],
      id:t[6],
      company_name:t[7],
     
    })
  }
  onupdate() {
    console.log("coming...")
    console.log('location is..'+this.testForm.get('location').value);
   
    this.authService.onupdate_test_light({
      location: this.testForm.get('location').value,
      unit: this.testForm.get('unit').value,
      inspection_area:this.testForm.get('inspection_area').value,
      normal_area:this.testForm.get('normal_area').value,
      lux:this.testForm.get('lux').value,
      area:this.testForm.get('area').value,
      id:this.testForm.get('id').value,
      company_name:this.testForm.get('company_name').value




    }).subscribe(
      result => {
        
        if (result) {
          this.router.navigateByUrl('/light-detail');
        }
      }
    )
  }
  logout() {
    localStorage.removeItem('currentUser');
  }

}
