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
  selector: 'app-noise-details-second',
  templateUrl: './noise-details-second.component.html',
  styleUrls: ['./noise-details-second.component.css'],
  providers:[AuthService,{provide:LocationStrategy,useClass:HashLocationStrategy}]

})
export class NoiseDetailsSecondComponent implements OnInit {

  shoppingItemList: Test[]=[];
  selectedItem: Test;


  constructor(

    private authService : AuthService,
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

  getItems( ){
    let newItem:Yo={
      company_name:company_name,
      date1:date1
        }  
     console.log("newItem" +newItem);
     
    this.authService.getnoisedetailsecond(newItem)
    .subscribe( items=>{
      t.push(items);
      console.log(t);

      this.shoppingItemList=t[0];
      
     console.log('data from dataservice:' +this.shoppingItemList);
    });
  
    }
    callall(id){

      // this.reload() ;
      this.deletenoise(id);
      // await location.reload();
      alert("Data deleted sucessfully " );
      location.reload();
}
  deletenoise(id){
    this.authService.deletenoisedetailSecond(id)
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
  // this.router.navigate(['/auth/login']);
  location.reload();

}


}
