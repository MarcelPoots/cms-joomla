import {Component, OnInit} from '@angular/core';
import {JoomlaService} from "../joomla.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  id!: string;
  singlePost: any;
  errorMessage: any;

  constructor(
    private route: ActivatedRoute,
    private service: JoomlaService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') as string;
    console.log(this.id);

    //this.getSinglePost();
  }
}
