import { Component, OnInit } from '@angular/core';
import { MatChipEvent, MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { AddPopUpComponent } from './add-pop-up/add-pop-up.component';
import { AddCategoriePopUpComponent } from './add-categorie-pop-up/add-categorie-pop-up.component';
import { DeleteCategoriePopUpComponent } from './delete-categorie-pop-up/delete-categorie-pop-up.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  categories = [
    { name: 'cat 1', color: 'primary' },
    { name: 'cat 2', color: 'accent' },
    { name: 'cat 3', color: 'warn' },
  ];

  removeChip(categorie: any) {
    const index = this.categories.indexOf(categorie);
    if (index > -1) {
      this.categories.splice(index, 1);
    }
  }
  remove(categorie: any): void {
    const index = this.categories.indexOf(categorie);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  onDialogAddUser(): void {
    const dialogRef = this.dialog.open(AddPopUpComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onDialogAddCategorie(): void {
    const dialogRef = this.dialog.open(AddCategoriePopUpComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onDialogDeleteCategorie(): void {
    const dialogRef = this.dialog.open(DeleteCategoriePopUpComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
