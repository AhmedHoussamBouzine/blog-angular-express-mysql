import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/core/models/Article';
import { articleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  public articles : Article[] = [] ;
  constructor(private articleService:articleService) { }

  ngOnInit(): void {
    this.getAllArticles();
  }
  getAllArticles() {
    this.articleService.getAll().subscribe(data => { this.articles = data;console.log(this.articles)})
  }
}
