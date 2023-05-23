import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/data/data.service';
import { Article } from 'src/app/core/models/Article';
import { UpdatePopUpComponent } from '../update-pop-up/update-pop-up.component';
import { articleService } from 'src/app/core/services/article.service';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { UtilisateurService } from 'src/app/core/services/utilisateur.service';
import { AddPopUpComponent } from '../add-pop-up/add-pop-up.component';
import { DeletePopUpComponent } from '../delete-pop-up/delete-pop-up.component';
import { UpdateUserPopUpComponent } from '../../users/update-user-pop-up/update-user-pop-up.component';
import { UpdateProfilePopUpComponent } from '../update-user-pop-up/update-user-pop-up.component';

@Component({
  selector: 'app-myarticles',
  templateUrl: './myarticles.component.html',
  styleUrls: ['./myarticles.component.css']
})
export class MyarticlesComponent implements OnInit {
  public user: any;
  loggeduser:any;
  constructor(public dialog: MatDialog, private articleService: articleService,private utilisateurService:UtilisateurService,private data:DataService,private router:Router,private authService:AuthServiceService) { }

  ngOnInit(): void {
    this.loggeduser = this.authService.loggedUser;
    this.getAllArticles();
  }

  onDialogAddArticle(): void {
    const dialogRefAdd = this.dialog.open(AddPopUpComponent);

    dialogRefAdd.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onDialogUpdateUser(): void {
    const dialogRefAdd = this.dialog.open(UpdateProfilePopUpComponent);

    dialogRefAdd.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onDialogUpdateArticle(article:any): void {
    const dialogRef = this.dialog.open(UpdatePopUpComponent);
    this.data.articleCrud = article;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onDialogDeleteArticle(article:any): void {
    const dialogRef = this.dialog.open(DeletePopUpComponent);
    this.data.articleCrud = article;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  getAllArticles() {
    this.utilisateurService.getById(this.loggeduser.id).subscribe(data => { this.user = data; console.log(this.user);})
  }
  viewDetail(id: number | undefined){
    this.data.articleId=id;
    this.router.navigateByUrl('/articles/'+id);
  }


}
