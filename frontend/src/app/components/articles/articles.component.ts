import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AddPopUpComponent } from './add-pop-up/add-pop-up.component';
import { MatDialog } from '@angular/material/dialog';
import { articleService } from 'src/app/core/services/article.service';
import { Article } from 'src/app/core/models/Article';
import { DataService } from 'src/app/core/data/data.service';
import { Router } from '@angular/router';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { Categorie } from 'src/app/core/models/Categorie';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit  {
  public articles: Article[] = [];

  constructor(public dialog: MatDialog, private articleService: articleService,private data:DataService,private router:Router) { }


  ngOnInit(): void {
    this.getAllArticles();
  }


  onDialogAddArticle(): void {
    const dialogRef = this.dialog.open(AddPopUpComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  getAllArticles() {
    this.articleService.getAll().subscribe(data => { this.articles = data; console.log(this.articles) })
  }
  viewDetail(id: number | undefined){
    this.data.articleId=id;
    this.router.navigateByUrl('/articles/'+id);
  }

}
