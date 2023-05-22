import { Component, OnInit } from '@angular/core';
import { MatChipEvent, MatChipInputEvent } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { AddPopUpUserComponent } from './add-pop-up/add-pop-up.component';
import { AddCategoriePopUpComponent } from './add-categorie-pop-up/add-categorie-pop-up.component';
import { DeleteCategoriePopUpComponent } from './delete-categorie-pop-up/delete-categorie-pop-up.component';
import { UtilisateurService } from 'src/app/core/services/utilisateur.service';
import { CategorieService } from 'src/app/core/services/categorie.service';
import { Categorie } from 'src/app/core/models/Categorie';
import { Utilisateur } from 'src/app/core/models/Utilisateur';
import { DataService } from 'src/app/core/data/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public categories: Categorie[] = [];
  public utilisateurs: Utilisateur[] = [];
  searchText: any;
  constructor(public dialog: MatDialog, private utilisateurService: UtilisateurService, private categorieService: CategorieService, private dataService: DataService) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllUtilisateurs();
  }
  getAllCategories() {
    this.categorieService.getAll().subscribe(data => { this.categories = data; })
  }
  getAllUtilisateurs() {
    this.utilisateurService.getAll().subscribe(data => { this.utilisateurs = data; console.log(this.utilisateurs) })
  }
  removeChip(categorie: any) {
  }
  remove(categorie: any): void {
    const index = this.categories.indexOf(categorie);

    if (index >= 0) {
      this.categories.splice(index, 1);
    }
  }

  onDialogAddUser(): void {
    const dialogRef = this.dialog.open(AddPopUpUserComponent);

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
  onDialogDeleteCategorie(categorie: any): void {
    const dialogRef = this.dialog.open(DeleteCategoriePopUpComponent);
    this.dataService.categorie = categorie;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
