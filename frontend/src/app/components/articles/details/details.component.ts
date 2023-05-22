import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { DataService } from 'src/app/core/data/data.service';
import { Article } from 'src/app/core/models/Article';
import { Commentaire } from 'src/app/core/models/Commentaire';
import { articleService } from 'src/app/core/services/article.service';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { CommentaireService } from 'src/app/core/services/commentaire.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public article: any | undefined;
  contenu: any;
  constructor(private articleService: articleService, private router: ActivatedRoute, private commentaireService: CommentaireService, private authSevice: AuthServiceService) { }
  public articleId: any = this.router.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.getArticle(this.articleId);
  }
  getArticle(articleId: number) {
    this.articleService.getById(articleId).subscribe(data => { this.article = data; console.log(this.article) })
  }
  onAddCommentaire() {
    var commentaire: Commentaire = {
      email: this.authSevice.loggedUser.email,
      contenu: this.contenu,
      articleId: this.article.id
    }
    console.log(commentaire)
    this.commentaireService.create(commentaire).subscribe(data => {
      console.log(data);
    }
    )
  }


}
