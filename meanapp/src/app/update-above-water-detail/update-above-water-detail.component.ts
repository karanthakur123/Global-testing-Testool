import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/services/auth.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { FormBuilder, FormGroup,FormControl,FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

var companyname;
var location2;
var t=[];
@Component({
  selector: 'app-update-above-water-detail',
  templateUrl: './update-above-water-detail.component.html',
  styleUrls: ['./update-above-water-detail.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]

})
export class UpdateAboveWaterDetailComponent implements OnInit {
 
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
      var company_name=params['company_name'];
      var capacity=params['capacity'];
      var issue_date=params['issue_date'];
      var sample_date=params['sample_date'];
      var report_no=params['report_no'];
      var request_no=params['request_no'];
      var sample_drawn=params['sample_drawn'];
      var sample_no=params['sample_no'];
      var protocol=params['protocol'];
       var area=params['area'];
       var issue_to=params['issue_to'];
       var request_date=params['request_date'];
       var sample_particular=params['sample_particular'];
       var sample_description=params['sample_description'];
       var date_of_testing=params['date_of_testing'];
       var id=params['id'];
  
      console.log("unit"+company_name);
      console.log("unit"+capacity);
      console.log("unit"+issue_date);
      console.log("unit"+sample_date);
      console.log("unit"+report_no);
      console.log("unit"+request_no);
      console.log("unit"+sample_drawn);
  
  
      t=[company_name,capacity,issue_date,sample_date,report_no,request_no,sample_drawn,sample_no,protocol,area,issue_to,request_date,sample_particular,sample_description,date_of_testing,id];
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
        company_name:t[0],
        capacity: t[1],
        issue_date:t[2],
        sample_date:t[3],
        report_no:t[4],
        request_no:t[5],
        sample_drawn:t[6],
  
  
        sample_no: t[7],
        protocol:t[8],
        area:t[9],
        issue_to:t[10],
        request_date:t[11],
        sample_particular:t[12],
  
        sample_description: t[13],
        date_of_testing:t[14],
        id:t[15]
      
  
  
  
  
      })
    }
    onupdate() {
      console.log("coming...")
    
     
    this.authService.onupdate_water_above_details({
      company_name: this.testForm.get('company_name').value,
      capacity: this.testForm.get('capacity').value,

      issue_date:this.testForm.get('issue_date').value,
      sample_date:this.testForm.get('sample_date').value,
      report_no:this.testForm.get('report_no').value,
      request_no:this.testForm.get('request_no').value,
      sample_drawn:this.testForm.get('sample_drawn').value,
      sample_no: this.testForm.get('sample_no').value,
      protocol: this.testForm.get('protocol').value,
      area:this.testForm.get('area').value,
      issue_to:this.testForm.get('issue_to').value,
      request_date:this.testForm.get('request_date').value,
      sample_particular:this.testForm.get('sample_particular').value,
      sample_description:this.testForm.get('sample_description').value,
      date_of_testing:this.testForm.get('date_of_testing').value,
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
