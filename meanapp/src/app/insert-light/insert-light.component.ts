import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



@Component({
  selector: 'app-insert-light',
  templateUrl: './insert-light.component.html',
  styleUrls: ['./insert-light.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]
})
export class InsertLightComponent implements OnInit {

  testForm: FormGroup;

  constructor(

    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService,

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
      location: [''],
      unit: [''],
      inspection_area:[''],
      normal_area:[''],
      lux:[''],
      company_name:[''],
      area:[''],
     

      
    })
  }

  onInsert() {
    console.log("coming...")
    this.authService.onInsert_test_light({
      location: this.testForm.get('location').value,
      unit: this.testForm.get('unit').value,
      inspection_area:this.testForm.get('inspection_area').value,
      normal_area:this.testForm.get('normal_area').value,
      lux:this.testForm.get('lux').value,
      company_name:this.testForm.get('company_name').value,

      area: this.testForm.get('area').value,
     

    }).subscribe(
      result => {
        
        if (result) {
          this.router.navigateByUrl('/backend/dashboard');
        }
      }
    )
  }
  
}
