import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-categorie-pop-up',
  templateUrl: './delete-categorie-pop-up.component.html',
  styleUrls: ['./delete-categorie-pop-up.component.css']
})
export class DeleteCategoriePopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteCategoriePopUpComponent>) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }
}
