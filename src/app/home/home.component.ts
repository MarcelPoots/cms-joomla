import {Component, OnInit} from '@angular/core';
import {JoomlaService} from "../joomla.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  id!: string;
  articles: any = null;
  errorMessage: any;

  constructor(private service: JoomlaService) {

  }

  ngOnInit(): void {
   // this.id = this.route.snapshot.paramMap.get('id') as string;
   // console.log('ID ' + this.id);
    this.getArticles();
    }

  getArticles() {
    //this.spinner.show();
    this.service.getArticles().subscribe(
      (response) => {
        // Try to run this code
        this.articles = response;
        console.log(this.articles);
      //  this.spinner.hide();
      },
      (error) => {
        // if any error, Code throws the error
        this.errorMessage = error.error.message;
        console.log(error.error.message, 'error');
        //this.spinner.hide();
      }
    );
  }


  protected readonly JSON = JSON;

}
