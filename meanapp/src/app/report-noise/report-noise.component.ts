import { Component, OnInit } from '@angular/core';
import {Test} from '../report/test'
import {AuthService} from '../auth/services/auth.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Yo} from '../auth/services/yo';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {ExcelService} from '../excel.service';
import { Test1 } from '../auth/services/test';
import { FormBuilder, FormGroup } from '@angular/forms';



var date1;
var company_name;
var t=[];
var t1=[];
@Component({
  selector: 'app-report-noise',
  templateUrl: './report-noise.component.html',
  styleUrls: ['./report-noise.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}],
  
})
export class ReportNoiseComponent implements OnInit {
  testForm: FormGroup;

  shoppingItemList: Test[]=[];
  details:Test1[]=[];
  selectedItem: Test;
  com: string;
   dd:string;
   Area
  constructor(
    private authService : AuthService,
    private activatedRoute: ActivatedRoute,
    private router : Router,
    private excelService:ExcelService,
    private fb: FormBuilder


  ) { 
    this.activatedRoute.queryParams.subscribe(params => {
      var date = params['area'];
      var company=params['company_name'];
      console.log(company);
      console.log(date);
      date1=date;
      company_name= company// Print the parameter to the console. 
    });
  }
  onInsert_create() {
    this.testForm = this.fb.group({
      report: [''],
      company_name: [''],
      date1:[''],
      type:['']
    
     
    })
  }
  
   onInsert() {
    console.log("coming...")
    this.authService.getnoiseremarks({
      company_name:company_name,
      date1:date1 ,
      report: this.testForm.get('report').value,
      type: 'noise_second'


}).subscribe(
      result => {
        
        if (result) {
        location.reload();
                }
      }
    )
  }

   
  getreport(){
    let newItem:Yo={
      company_name:company_name,
      date1:date1,

      
      
    
    }  
 console.log(newItem);
    this.authService.get_test_report(newItem)
    .subscribe( items=>{
    
      t.push(items);
      console.log(t);

      this.shoppingItemList=t[0];
      console.log('data from dataservice:' +this.shoppingItemList);
    });
    this.authService.getnoisedetailss(newItem)
    .subscribe( items=>{
      t1.push(items);
      console.log(t1);

      this.details=t1[0];
  
    
     console.log('data from dataservice:' +this.details);
    });
    }
    logout() {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/auth/login']);
    
    }
  ngOnInit(){
    this.getreport();
    this.com=company_name;
    this.com=company_name;
    this.Area=date1;
    this.onInsert_create();

  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.shoppingItemList, 'myExcelFile');
 }
}
