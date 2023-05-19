import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-add-pop-up',
  templateUrl: './add-pop-up.component.html',
  styleUrls: ['./add-pop-up.component.css']
})
export class AddPopUpComponent implements OnInit {

  htmlContent: any;

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
  constructor(public dialogRef: MatDialogRef<AddPopUpComponent>,private sanitizer: DomSanitizer) { }

  aff(){
    console.log(this.sanitizer.bypassSecurityTrustHtml(this.htmlContent));
  }
  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }

}
