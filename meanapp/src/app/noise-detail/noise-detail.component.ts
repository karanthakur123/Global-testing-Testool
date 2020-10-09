import { Component, OnInit } from '@angular/core';
import {Test} from '../report/test'
import {AuthService} from '../auth/services/auth.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Yo} from '../auth/services/yo';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


var date1;
var company_name;
var t=[];


@Component({
  selector: 'app-noise-detail',
  templateUrl: './noise-detail.component.html',
  styleUrls: ['./noise-detail.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]

})
export class NoiseDetailComponent implements OnInit {

  shoppingItemList: Test[]=[];
  selectedItem: Test;


  constructor(private authService : AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router,

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
     callall(id){

      // this.reload() ;
      this.deletenoise(id);
      // await location.reload();
      alert("Data deleted sucessfully " );
      location.reload();
}
     getItems( ){
      let newItem:Yo={
        company_name:company_name,
        date1:date1
          }  
       console.log("newItem "+newItem);
       
      this.authService.getnoiseadmindetails(newItem)
      .subscribe( items=>{
        t.push(items);
        console.log("result.." +t);
  
        this.shoppingItemList=t[0];
        
       console.log('data from dataservice:' +this.shoppingItemList);
      });
    
      }

    deletenoise(id){
      this.authService.deletenoisedetail(id)
      .subscribe(
        data =>{
        
        if(data){
       
          this.router.navigateByUrl('/noise-detail');
            }
            console.log( data);
            this.deletenoise(id);
      })
    
    }
  ngOnInit() {
   
    this.getItems();
   
    
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login']);

  }
}
