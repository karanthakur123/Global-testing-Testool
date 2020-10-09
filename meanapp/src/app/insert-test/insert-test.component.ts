import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



@Component({
  selector: 'app-insert-test',
  templateUrl: './insert-test.component.html',
  styleUrls: ['./insert-test.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]
})
export class InsertTestComponent implements OnInit {
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
      location: [''],
      unit: [''],
      l_max:[''],
      l_min:[''],
      l_eq:[''],
      area:['']
     
    })
  }
  onInsert() {
    console.log("coming...")
    this.authService.onInsert_test({
      area:this.testForm.get('area').value,
      location: this.testForm.get('location').value,
      unit: this.testForm.get('unit').value,
      l_max:this.testForm.get('l_max').value,
      l_min:this.testForm.get('l_min').value,
      l_eq:this.testForm.get('l_eq').value,
   




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
