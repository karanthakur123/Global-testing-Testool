import { Component, OnInit } from '@angular/core';
import {Test} from '../report/test'
import {AuthService} from '../auth/services/auth.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ExcelService} from '../excel.service';
import * as XLSX from 'xlsx';
import { Test1 } from '../auth/services/test';
import {Yo, report} from '../auth/services/yo';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormBuilder, FormGroup } from '@angular/forms';


var date1;
var company_name;
var t=[];
var t1=[];
@Component({
  selector: 'app-report-light',
  templateUrl: './report-light.component.html',
  styleUrls: ['./report-light.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]
})
export class ReportLightComponent implements OnInit {
  testForm: FormGroup;
  shoppingItemList: Test[]=[];
  details:Test1[]=[];
  selectedItem: Test;
  com: string;
   dd:string;
   Area
   array:any[]=[];
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
      var type=params['type'];
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
   exportexcel_light(): void
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
    this.authService.getlightremarks({
      company_name:company_name,
      date1:date1 ,
      report: this.testForm.get('report').value,
      type: 'light'


}).subscribe(
      result => {
        
        if (result) {
        location.reload();
                }
      }
    )
  }
     
  getreport_light(){
    let newItem:Yo={
      company_name:company_name,
      date1:date1,

      
      
    
    }  
 console.log(newItem);
    this.authService.getlight_report(newItem)
    .subscribe( items=>{
    
      t.push(items);
      console.log(t);

      this.shoppingItemList=t[0];
     console.log('data from dataservice:' +this.shoppingItemList);
    });


    this.authService.getlightdetailss(newItem)
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
  ngOnInit() {

    this.getreport_light();
    this.com=company_name;

    this.com=company_name;
    this.Area=date1;
    this.onInsert_create();
  }
  exportAsXLSX_light():void {
    this.excelService.exportAsExcelFile(this.shoppingItemList, 'myExcelFile');
 }


AddtoArray(details:any){
    this.array.push(details);
    console.log(JSON.stringify((details)[0]));
    let t=[];
    // t.push(details);
    // console.log('result '+JSON.stringify(t));
    

}


}
