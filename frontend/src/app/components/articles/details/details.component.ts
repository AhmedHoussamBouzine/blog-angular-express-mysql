import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { DataService } from 'src/app/core/data/data.service';
import { Article } from 'src/app/core/models/Article';
import { articleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public article:any | undefined ;
  constructor(private articleService:articleService,private router:ActivatedRoute) { }
  public articleId:any = this.router.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.getArticle(this.articleId);
  }
  getArticle(articleId:number){
    this.articleService.getById(articleId).subscribe(data => {this.article = data;console.log(this.article)})
  }

}
