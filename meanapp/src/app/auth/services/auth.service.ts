
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { catchError, tap, mapTo } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { User } from '../models/user';
import { City } from './city';
import {Test, Test1} from './test';
import {Yo,report} from './yo';
import {Test_Noise} from './test_noise1';
import {Test_light} from './test_light'
import * as jwt_decode from 'jwt-decode';
import { Test_water } from './test_water';
import { Test_update,Test_update_second,Test_update_water,Test_update_light,Test_update_above_noise } from './update_test';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl = `${environment.apiUrl}/auth`;
  private handleError: HandleError;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('AuthService')
  }

  signup(data: User) {
    return this.http.post(`${this.apiUrl}/signup`, data, this.httpOptions)
    .pipe(
      catchError(this.handleError('signup', null))
    )
  }

  login(data: any): Observable<boolean> {
    return this.http.post(`${this.apiUrl}/login`, data, this.httpOptions)
    .pipe(
      tap(user => this.doLogin(user)),
      mapTo(true),
      catchError(this.handleError('login', false))
    )
  }

  doLogin(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }

  getDecodeToken(token: string) {
    return jwt_decode(token);
  }

  isLoggedIn() {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      const token = this.getDecodeToken(currentUser.token);
      const currentTime = Math.round((new Date()).getTime() / 1000);
      if (token.exp > currentTime) {
        return true;
      } else {
        this.logout();
      }
    }
    return false;
  }
  searchcity(data: City)  {
   

    return this.http.post(`${this.apiUrl}/search`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }
  getShoppingItems(data :Yo){
    
    console.log("date is "+data);

    return this.http.post(`${this.apiUrl}/test_report`, data,this.httpOptions)
    .pipe(
     
      catchError(this.handleError('login', false))
    )
  }

  get_test_report(data :Yo){
    return this.http.post(`${this.apiUrl}/test_noise_report`, data,this.httpOptions)
    .pipe(
     
      catchError(this.handleError('login', false))
    )
  }

  getlight_report(data :Yo){
    return this.http.post(`${this.apiUrl}/test_light_report`, data,this.httpOptions)
    .pipe(
     
      catchError(this.handleError('login', false))
    )
  }
  getwater_report(data :Yo){
    return this.http.post(`${this.apiUrl}/test_water_report`, data,this.httpOptions)
    .pipe(
     
      catchError(this.handleError('login', false))
    )
  }
  onInsert_test(data: Test)  {
   

    return this.http.post(`${this.apiUrl}/insert_report`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }
  onInsert_test1(data: Test1)  {
   
   console.log("hey.."+ data)
    return this.http.post(`${this.apiUrl}/insert_noise_report`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }

  onInsert__above_details(data: Test1)  {
   
    console.log("hey.."+ data)
     return this.http.post(`${this.apiUrl}/insert_water_above`, data,this.httpOptions)
     
     .pipe(
       
       catchError(this.handleError('searchcity', false))
     )
     
   }
   onInsert__light_above_details(data: Test1)  {
   
    console.log("hey.."+ data)
     return this.http.post(`${this.apiUrl}/insert_light_above`, data,this.httpOptions)
     
     .pipe(
       
       catchError(this.handleError('searchcity', false))
     )
     
   }
   
  
  

  onupdate_test(data: Test_update)  {

    return this.http.put(`${this.apiUrl}/update_report`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }
  onupdate_noise_above_details(data: Test_update_above_noise)  {
console.log("hghgchyg"+data);
    return this.http.put(`${this.apiUrl}/update_above_noise`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }
  onupdate_light_above_details(data: Test_update_above_noise)  {
    console.log("hghgchyg"+data);
        return this.http.put(`${this.apiUrl}/update_above_light`, data,this.httpOptions)
        
        .pipe(
          
          catchError(this.handleError('searchcity', false))
        )
        
      }
  
  onupdate_water_above_details(data: Test_update_above_noise)  {
    console.log("hghgchyg"+data);
        return this.http.put(`${this.apiUrl}/update_above_water`, data,this.httpOptions)
        
        .pipe(
          
          catchError(this.handleError('searchcity', false))
        )
        
      }
  onupdate_test_second(data: Test_update_second)  {
    console.log("yo yo"+data[0]);
 
     return this.http.put(`${this.apiUrl}/update_report_second`, data,this.httpOptions)
     
     .pipe(
       
       catchError(this.handleError('searchcity', false))
     )
     
   }
   onupdate_test_water(data: Test_update_water)  {
    console.log("yo yo"+data[0]);
 
     return this.http.put(`${this.apiUrl}/update_report_water`, data,this.httpOptions)
     
     .pipe(
       
       catchError(this.handleError('searchcity', false))
     )
     
   }
   
   
   onupdate_test_light(data: Test_update_light)  {
    console.log("yo yo"+data[0]);
 
     return this.http.put(`${this.apiUrl}/update_report_light`, data,this.httpOptions)
     
     .pipe(
       
       catchError(this.handleError('searchcity', false))
     )
     
   }
  onInsert_test_noise(data: Test_Noise)  {
   

    return this.http.post(`${this.apiUrl}/insert_report_noise`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }

  onInsert_test_light(data: Test_light)  {
   

    return this.http.post(`${this.apiUrl}/insert_report_light`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }
  onInsert_test_water(data: Test_water)  {
   

    return this.http.post(`${this.apiUrl}/insert_report_water`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }
  
  getnoisedetails(data: Yo)  {
   
    console.log(data);
    return this.http.post(`${this.apiUrl}/noise_details`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }
  getnoiseadmindetails(data: Yo)  {
   
    console.log(data);
    return this.http.post(`${this.apiUrl}/noise_admin_details`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }

  getnoiseremarks(data: report)  {
   
    console.log(data);
    return this.http.post(`${this.apiUrl}/report_noise`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }
  getlightremarks(data: report)  {
   
    console.log(data);
    return this.http.post(`${this.apiUrl}/report_light`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }

  getwaterremarks(data: report)  {
   
    console.log(data);
    return this.http.post(`${this.apiUrl}/report_water`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }
  


  getnoisedetailss(data: Yo)  {
   
    console.log("this is the data "+data);
    return this.http.post(`${this.apiUrl}/noise_detailss`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }

  getwaterdetailss(data: Yo)  {
   
  console.log("this is the data "+data);
  return this.http.post(`${this.apiUrl}/water_above_details`, data,this.httpOptions)
  
  .pipe(
    
    catchError(this.handleError('searchcity', false))
  )
  
}



  getlightdetailss(data: Yo)  {
   
 
  return this.http.post(`${this.apiUrl}/light_above_details`, data,this.httpOptions)
  
  .pipe(
    
    catchError(this.handleError('searchcity', false))
  )
  
}
  getallnoisedetails()  {
   
    return this.http.get(`${this.apiUrl}/noise_all_details`,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }


  getallwaterdetails()  {
   
    return this.http.get(`${this.apiUrl}/water_all_details`,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }
  getlightreport()  {
   
    return this.http.get(`${this.apiUrl}/view_light_remark`,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }

  getwaterreport()  {
   
    return this.http.get(`${this.apiUrl}/view_water_remark`,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }

  getairreport()  {
   
    return this.http.get(`${this.apiUrl}/view_air_remark`,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }
  

  getalllightdetails()  {
   
    return this.http.get(`${this.apiUrl}/light_all_details`,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }

  
  
  
  
  
  getlightdetails(data: Yo)  {
   

    return this.http.post(`${this.apiUrl}/light_details`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }
  
  getwaterdetails(data: Yo)  {
   

    return this.http.post(`${this.apiUrl}/water_details`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }

  getnoisedetailsecond(data: Yo)  {
   

    return this.http.post(`${this.apiUrl}/noise_details_second`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }
  deletenoisedetail(id){
    return this.http.delete(`${this.apiUrl}/delete_noise/`+id,this.httpOptions)
    .pipe(
     
      catchError(this.handleError('login', false))
    )
    
  }
    
  deletenoisealldetail(id){
    
    return this.http.delete(`${this.apiUrl}/delete_all_noise_details/`+id,this.httpOptions)
    .pipe(
     
      catchError(this.handleError('login', false))
    )
  
    
  }


  deletelightalldetail(id){
    
    return this.http.delete(`${this.apiUrl}/delete_all_light_details/`+id,this.httpOptions)
    .pipe(
     
      catchError(this.handleError('login', false))
    )
  
    
  }

  deletewateralldetail(id){
    
    return this.http.delete(`${this.apiUrl}/delete_all_water_details/`+id,this.httpOptions)
    .pipe(
     
      catchError(this.handleError('login', false))
    )
  
    
  }

  deletelightdetail(id){
    return this.http.delete(`${this.apiUrl}/delete_light/`+id,this.httpOptions)
    .pipe(
     
      catchError(this.handleError('login', false))
    )
    
  }
  deletewaterdetail(id){
    return this.http.delete(`${this.apiUrl}/delete_water/`+id,this.httpOptions)
    .pipe(
     
      catchError(this.handleError('login', false))
    )
    
  }
  
  deletenoisedetailSecond(id){
    return this.http.delete(`${this.apiUrl}/delete_noise_second/`+id,this.httpOptions)
    .pipe(
     
      catchError(this.handleError('login', false))
    )
    
  }
  
  logout() {
    localStorage.removeItem('currentUser');
  }

}
