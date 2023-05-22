import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Article } from 'src/app/core/models/Article';
import { Categorie } from 'src/app/core/models/Categorie';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { articleService } from 'src/app/core/services/article.service';
import { DataService } from 'src/app/core/data/data.service';

@Component({
  selector: 'app-update-pop-up',
  templateUrl: './update-pop-up.component.html',
  styleUrls: ['./update-pop-up.component.css']
})
export class UpdatePopUpComponent implements OnInit {
  id:any;
  contenu: any;
  titre: any;
  image: any;
  selectedCategories: number[] = [];

  public categories: Categorie[] = []
  selectedcategorie!: number;
  configEditor: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    translate: 'no',
    height: '200px',
    width: '700px',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    sanitize: true,
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };
  constructor(public dialogRef: MatDialogRef<UpdatePopUpComponent>, private sanitizer: DomSanitizer, private categorieService: CategorieService, private articleService: articleService,private authService:AuthServiceService,private dataService:DataService) { }

  aff() {
    console.log(this.sanitizer.bypassSecurityTrustHtml(this.contenu));
  }
  ngOnInit(): void {
    this.categorieService.getAll().subscribe(data => { this.categories = data })
    this.id = this.dataService.articleCrud.id;
    this.titre = this.dataService.articleCrud.titre;
    this.contenu = this.dataService.articleCrud.contenu;
    this.image = this.dataService.articleCrud.image;
  }
  ChangeCategorie(e: Event) {
    this.selectedcategorie = parseInt((e.target as HTMLInputElement).value);
    console.log((e.target as HTMLInputElement).value);
  }
  close() {
    this.dialogRef.close();
  }

  onUpdate() {
    var article: Article = {
      id: this.id,
      titre: this.titre,
      image: this.image,
      contenu: this.contenu,
      published: true,
      utilisateurId:this.authService.loggedUser.id,
      categorieIds: this.selectedCategories,
    };
    console.log(article);
    console.log(this.authService.loggedUser.id);
    this.articleService.update(article).subscribe(data => {
      console.log(data);
      this.close();
    }
    )
  }

}
