import {Component, OnInit} from '@angular/core';
import {JoomlaService} from "../joomla.service";
import {ActivatedRoute} from "@angular/router";
import {NgxSpinner, NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id!: string;
  article: any;
  errorMessage: any;

  constructor(
    private route: ActivatedRoute,
    private service: JoomlaService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.id);

    this.getSingleArticle(this.id);
  }

    getSingleArticle(id : string) {
      this.spinner.show();
      this.service.getSingleArticles(id).subscribe(
        (response) => {
          // Try to run this code
          this.article = response;
          console.log(this.article);
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
