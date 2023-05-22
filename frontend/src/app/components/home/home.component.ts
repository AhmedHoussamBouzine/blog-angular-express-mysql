import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from 'src/app/core/models/Article';
import { articleService } from 'src/app/core/services/article.service';
import { CategorieService } from 'src/app/core/services/categorie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categories: any[] = []
  articles: Article[] = [];
  lastTenArticles:any = [];

  constructor(private categorieService: CategorieService, private articleService: articleService) { }

  ngOnInit(): void {
    this.categorieService.getAll().subscribe(
      (data) => {
        this.categories = data;
        console.log(this.categories);
      }
    )

    this.articleService.getTen().subscribe(data => { this.articles = data; }
    )

  }
}


