
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { City } from '../../dashboard/dashboard/city';

import { MessageService } from 'src/app/services/message.service';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';



@Component({
  selector: 'app-backend-header',
  templateUrl: './backend-header.component.html',
  styleUrls: ['./backend-header.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]

})
export class BackendHeaderComponent implements OnInit {
  title: string;
  cityform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private authService: AuthService,
    private router: Router,
    private route:ActivatedRoute
  ) {}

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
    
    
    this.authService.searchcity(
      {
      city: this.cityform.get('city').value,
      

    })
    
    .subscribe(result => {

        console.log(result[0].city);
        
        if (result) {
          this.messageService.clear();
          this.router.navigateByUrl('/backend/dashboard');
        }
      }
    )
  }
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
    location.reload();
  }

}
