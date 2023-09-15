import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private http: HttpClient) {
    this.getArticles();
  }

  getArticles(){
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'text/plain');
    headers.set('Accept', '*/*');
    headers.set('X-Joomla-Token', 'c2hhMjU2OjczNDphZDliNmIwMjdhOGFiNjc4NzA1YzJhY2NkZmQzMjU2ZTc2ZDM2ODNmODQxNzc3NWQ0MjY2MmQxYWJkMjdlN2E2');

    this.http.get('http://localhost/joomla/api/index.php/v1/content/articles', {
      headers: {'Content-Type':'text/plain',
                 'Accept':'*/*',
                 'X-Joomla-Token':'c2hhMjU2OjczNDphZDliNmIwMjdhOGFiNjc4NzA1YzJhY2NkZmQzMjU2ZTc2ZDM2ODNmODQxNzc3NWQ0MjY2MmQxYWJkMjdlN2E2'}
    }).subscribe( (response) => {
      console.log( JSON.stringify(response) );
    })
  }
}
