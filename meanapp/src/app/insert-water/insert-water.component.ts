import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@Component({
  selector: 'app-insert-water',
  templateUrl: './insert-water.component.html',
  styleUrls: ['./insert-water.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]

})
export class InsertWaterComponent implements OnInit {
  testForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
  ) { }
  ngOnInit(){
    this.onInsert_create();
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login']);

  }
  onInsert_create() {
    this.testForm = this.fb.group({
      parameters: [''],
      test_method: [''],
      results:[''],
      units:[''],
      desirable:[''],
      permissible:[''],
      max_limit:[''],
      company_name:[''],
       area:[''],
     
      
    })
  }

  onInsert() {
    console.log("coming...")
    this.authService.onInsert_test_water({
      parameters: this.testForm.get('parameters').value,
      test_method: this.testForm.get('test_method').value,
      results:this.testForm.get('results').value,
      units:this.testForm.get('units').value,
      desirable:this.testForm.get('desirable').value,
      permissible:this.testForm.get('permissible').value,

      max_limit: this.testForm.get('max_limit').value,
      company_name: this.testForm.get('company_name').value,
      area:this.testForm.get('area').value,
     
    }).subscribe(
      result => {
        
        if (result) {
          this.router.navigateByUrl('/backend/dashboard');
        }
      }
    )
  }

}
