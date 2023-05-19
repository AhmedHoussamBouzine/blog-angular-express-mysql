import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-categorie-pop-up',
  templateUrl: './add-categorie-pop-up.component.html',
  styleUrls: ['./add-categorie-pop-up.component.css']
})
export class AddCategoriePopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCategoriePopUpComponent>) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }

}
