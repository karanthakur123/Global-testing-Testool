
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



import { MessageService } from 'src/app/services/message.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]
})
export class AdminDashboardComponent implements OnInit {
  title: string;
  cityform: FormGroup;


  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router
  ) { }

  
  ngOnInit(){
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login']);

  }
}
