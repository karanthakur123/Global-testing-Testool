
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MessageService } from 'src/app/services/message.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]

})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  title: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/backend/dashboard');
    }
  }

  ngOnInit() {
    this.title = 'Administrator Login';
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  onSubmit() {
    this.authService.login({
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }).subscribe(
      result => {
        
        if(this.loginForm.get('username').value=='admin'){
       
          this.messageService.clear();
          this.router.navigateByUrl('/admin-dashboard');
            }
         else if (result) {
          this.messageService.clear();
          this.router.navigateByUrl('/backend/dashboard');
        }
      }
    )
  }

}
