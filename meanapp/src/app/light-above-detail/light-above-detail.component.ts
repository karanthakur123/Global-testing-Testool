import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
@Component({
  selector: 'app-light-above-detail',
  templateUrl: './light-above-detail.component.html',
  styleUrls: ['./light-above-detail.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]

})
export class LightAboveDetailComponent implements OnInit {

  testForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.onInsert_create();
  }
  onInsert_create() {
    this.testForm = this.fb.group({
    
      company_name:[''],
      capacity:[''],
      issue_date:[''],
      sample_date:[''],
      request_no:[''],
      sample_drawn:[''],
      sample_no:[''],
      report_no:[''],
      area:[''],
      protocol:[''],
      issue_to:[''],
      request_date:[''],
      sample_particular:[''],
      sample_description:[''],
      date_of_testing:['']
    })
  }
  onInsert() {
    console.log("coming...")
    this.authService.onInsert__light_above_details({
     company_name:this.testForm.get('company_name').value,
      capacity:this.testForm.get('capacity').value,
      issue_date:this.testForm.get('issue_date').value,
      sample_date:this.testForm.get('sample_date').value,
      request_no:this.testForm.get('request_no').value,
      sample_drawn:this.testForm.get('sample_drawn').value,
      sample_no:this.testForm.get('sample_no').value,
      report_no:this.testForm.get('report_no').value,
      area:this.testForm.get('area').value,
      protocol:this.testForm.get('protocol').value,

      issue_to:this.testForm.get('issue_to').value,
      request_date:this.testForm.get('request_date').value,
      sample_particular:this.testForm.get('sample_particular').value,
      sample_description:this.testForm.get('sample_description').value,
      date_of_testing:this.testForm.get('date_of_testing').value,

      




    }).subscribe(
      result => {
        
        if (result) {
          this.router.navigateByUrl('/admin-dashboard');
        }
      }
    )
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login']);

  }

}
