import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Categorie } from 'src/app/core/models/Categorie';
import { CategorieService } from 'src/app/core/services/categorie.service';

@Component({
  selector: 'app-add-pop-up',
  templateUrl: './add-pop-up.component.html',
  styleUrls: ['./add-pop-up.component.css']
})
export class AddPopUpComponent implements OnInit {

  htmlContent: any;
  public categories : Categorie[]=[]
  selectedcategorie!:number;
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
  constructor(public dialogRef: MatDialogRef<AddPopUpComponent>,private sanitizer: DomSanitizer,private categorieService:CategorieService) { }

  aff(){
    console.log(this.sanitizer.bypassSecurityTrustHtml(this.htmlContent));
  }
  ngOnInit(): void {
    this.categorieService.getAll().subscribe(data => { this.categories = data})
  }
  ChangeCategorie(e: Event) {
    this.selectedcategorie = parseInt((e.target as HTMLInputElement).value);
      console.log((e.target as HTMLInputElement).value);
     }
  close(){
    this.dialogRef.close();
  }

}
