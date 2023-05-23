import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DataService } from 'src/app/core/data/data.service';
import { Article } from 'src/app/core/models/Article';
import { Categorie } from 'src/app/core/models/Categorie';
import { articleService } from 'src/app/core/services/article.service';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';
import { CategorieService } from 'src/app/core/services/categorie.service';

@Component({
  selector: 'app-add-pop-up',
  templateUrl: './add-pop-up.component.html',
  styleUrls: ['./add-pop-up.component.css']
})
export class AddPopUpComponent implements OnInit {

  contenu: any;
  titre: any;
  image: any;
  articlesList: EventEmitter<any[]> = new EventEmitter<any[]>();

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
  constructor(public dialogRef: MatDialogRef<AddPopUpComponent>, private sanitizer: DomSanitizer, private categorieService: CategorieService, private articleService: articleService,private authService:AuthServiceService) { }

  aff() {
    console.log(this.sanitizer.bypassSecurityTrustHtml(this.contenu));
  }
  ngOnInit(): void {
    this.categorieService.getAll().subscribe(data => { this.categories = data })
  }
  ChangeCategorie(e: Event) {
    this.selectedcategorie = parseInt((e.target as HTMLInputElement).value);
    console.log((e.target as HTMLInputElement).value);
  }
  close() {
    this.dialogRef.close();
  }
  onAdd() {
    var article: Article = {
      titre: this.titre,
      image: this.image,
      contenu: this.contenu,
      published: true,
      utilisateurId:this.authService.loggedUser.id,
      categorieIds: this.selectedCategories,
    };
    console.log(article);
    console.log(this.authService.loggedUser.id);
    this.articleService.create(article).subscribe(data => {
      console.log(data);
      this.close();
    }
    )
  }

}
