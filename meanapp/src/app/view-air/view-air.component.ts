import { Component, OnInit } from '@angular/core';
import {Test} from '../report/test'
import {AuthService} from '../auth/services/auth.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ExcelService} from '../excel.service';
import * as XLSX from 'xlsx';
import {Yo,report} from '../auth/services/yo';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Test1 } from '../auth/services/test';


var date1;
var company_name;
var t=[];
var t1=[];
@Component({
  selector: 'app-view-air',
  templateUrl: './view-air.component.html',
  styleUrls: ['./view-air.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]

})
export class ViewAirComponent implements OnInit {

  shoppingItemList: Test[]=[];
  details:Test1[]=[];
  selectedItem: Test;
  com: string;
   dd:string;
  constructor(private authService : AuthService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
    private excelService:ExcelService,
    
    ) {
     
   

     }

  
  


  getItems(){
  

    this.authService.getairreport()
    .subscribe( items=>{
      t.push(items);
      console.log(t);

      this.shoppingItemList=t[0];
      
    });

    this.authService.getairreport()
    .subscribe( items=>{
      t1.push(items);
      console.log(t1);

      this.details=t1[0];
  
    
     console.log('data from dataservice:' +this.details);
    });
  
  
    }
  
    reload()
    {
      location.reload();
    }


     callall(id){

      // this.reload() ;
      this.deletewater(id);
      // await location.reload();
      alert("Data deleted sucessfully " );
      location.reload();
}
    deletewater(id){
     
      this.authService.deletewateralldetail(id)
      
      .subscribe(
        
        data =>{
        

           
            console.log( data);
         
            this.deletewater(id);
            
      }
      
      )
   
  
      
    }
    
    logout() {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/auth/login']);
    
    }
  ngOnInit() {
   
    this.getItems();
    this.com=company_name;

  
  }

}
