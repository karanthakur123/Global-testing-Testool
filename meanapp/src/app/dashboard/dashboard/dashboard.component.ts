import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DashboardService } from '../dashboard.service';

import { City } from './city';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DashboardService]
})

export class DashboardComponent implements OnInit {
  
  title: string;
  cityform: FormGroup;


  constructor(  
      private fb: FormBuilder,
    private router: Router,
    private dashboardService: DashboardService,
    private messageService: MessageService
    )
     { 
      
     }

  ngOnInit() {
    this.createForm();
    

  }

  createForm() {
    this.cityform = this.fb.group({
      city: ['']
    
    })
   
  }

  search(){
    console.log("hey...");
    
    
    this.dashboardService.searchcity(
      {
      city: this.cityform.get('city').value,
      

    })
    
    .subscribe(result => {

        console.log("result" +result)
        if (result) {
          this.messageService.clear();
          this.router.navigateByUrl('/backend/login');
        }
      }
    )
  }

}
