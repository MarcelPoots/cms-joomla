import {Component, OnInit} from '@angular/core';
import {JoomlaService} from "../joomla.service";
import {NgxSpinnerService} from "ngx-spinner";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  articles: any = null;
  errorMessage: any;

  constructor(private service: JoomlaService,
              private spinner: NgxSpinnerService) {

  }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
    this.spinner.show();
    this.service.getArticles().subscribe(
      (response) => {
        // Try to run this code
        this.articles = response;
        console.log(this.articles);
        this.spinner.hide();

      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
        this.spinner.hide();
      }
    );
  }


}
