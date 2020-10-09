import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap, mapTo } from 'rxjs/operators';

import { HttpErrorHandler, HandleError } from '../services/http-error-handler.service';
import { environment } from '../../environments/environment';
import { City } from './dashboard/city';

@Injectable({
  providedIn: 'root'
})

export class DashboardService {

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
    this.handleError = this.httpErrorHandler.createHandleError('DashboardService')

  }

  searchcity(data: City)  {
   

    return this.http.post(`${this.apiUrl}/search`, data,this.httpOptions)
    
    .pipe(
      
      catchError(this.handleError('searchcity', false))
    )
    
  }
}
