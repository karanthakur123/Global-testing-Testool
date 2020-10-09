import { Component, OnInit } from '@angular/core';
import {Test} from '../report/test'
import {AuthService} from '../auth/services/auth.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ExcelService} from '../excel.service';
import * as XLSX from 'xlsx';
import {Yo,report} from '../auth/services/yo';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Test1 } from '../auth/services/test';

import { FormBuilder, FormGroup } from '@angular/forms';

var date1;
var company_name;
var t=[];
var t1=[];
@Component({
  selector: 'app-report-water',
  templateUrl: './report-water.component.html',
  styleUrls: ['./report-water.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]
})
export class ReportWaterComponent implements OnInit {
  testForm: FormGroup;

  shoppingItemList: Test[]=[];
  details:Test1[]=[];
  selectedItem: Test;
  area:string;
  com: string;
   dd:string;
   Area
  constructor(
    private authService : AuthService,
    private activatedRoute: ActivatedRoute,
    private router :Router,
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
   refresh()
   {
    location.reload();
   }

   fileName= 'Report.xlsx';
   exportexcel_water(): void
   {
     
     /* pass here the table id */
     let element = document.getElementById('excel-table');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
  
     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
   
     /* save to file */  
     XLSX.writeFile(wb, this.fileName,{cellDates: true});
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
    this.authService.getwaterremarks({
      company_name:company_name,
      date1:date1 ,
      report: this.testForm.get('report').value,
      type: 'water'


}).subscribe(
      result => {
        
        if (result) {
        location.reload();
                }
      }
    )
  }

   getreport_water(){
    let newItem:Yo={
      company_name:company_name,
      date1:date1,

      
      
    
    }  
 console.log(newItem);
    this.authService.getwater_report(newItem)
    .subscribe( items=>{
    
      t.push(items);
      console.log(t);

      this.shoppingItemList=t[0];     console.log('data from dataservice:' +this.shoppingItemList);
    });
    this.authService.getwaterdetailss(newItem)
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
    this.area=date1;
    this.getreport_water();
    this.com=company_name;
    this.Area=date1;
    this.onInsert_create();

  }
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.shoppingItemList, 'myExcelFile');
 }
 

}
