import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, Observer} from "rxjs";
import { catchError, map } from 'rxjs/operators';

const headers ={
  'Content-Type':'text/plain',
  'Accept':'*/*',
  'X-Joomla-Token':'c2hhMjU2OjczNDphZDliNmIwMjdhOGFiNjc4NzA1YzJhY2NkZmQzMjU2ZTc2ZDM2ODNmODQxNzc3NWQ0MjY2MmQxYWJkMjdlN2E2'}

@Injectable({
  providedIn: 'root'
})
export class JoomlaService {


  constructor(private http: HttpClient) { }

  getArticles() : Observable<any>   {
/*
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'text/plain');
    headers.set('Accept', '*!/!*');
    headers.set('X-Joomla-Token', 'c2hhMjU2OjczNDphZDliNmIwMjdhOGFiNjc4NzA1YzJhY2NkZmQzMjU2ZTc2ZDM2ODNmODQxNzc3NWQ0MjY2MmQxYWJkMjdlN2E2');
*/

    return this.http.get('http://localhost/joomla/api/index.php/v1/content/articles',
      {headers}).pipe(catchError(this.errorHandler));

  }

  getSingleArticles(id: string){

    return this.http.get('http://localhost/joomla/api/index.php/v1/content/articles/' +id,
    {headers}).pipe(catchError(this.errorHandler));

  }

  errorHandler(error: HttpErrorResponse) {
    return new Observable((observer: Observer<any>) => {
      observer.error(error);
    });
  }
}
