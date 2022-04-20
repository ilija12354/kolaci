import { Component, OnInit } from '@angular/core';
import {ArticleModel} from "../shared/article.model";
import ArticleData from '../../data/proba.json';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  articles: any[] = []
  constructor() { }

  ngOnInit(): void {
    ArticleData.forEach(article => {
      this.articles.push(article);
    })
  }

}
