import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Categorie } from 'src/app/core/models/Categorie';
import { CategorieService } from 'src/app/core/services/categorie.service';

@Component({
  selector: 'app-add-categorie-pop-up',
  templateUrl: './add-categorie-pop-up.component.html',
  styleUrls: ['./add-categorie-pop-up.component.css']
})
export class AddCategoriePopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCategoriePopUpComponent>,private categorieService:CategorieService) { }
  nom:any;
  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }
  onAdd(){
    var categorie:Categorie = {
      nom:this.nom,
      articleIds : []
    }
    this.categorieService.create(categorie).subscribe((data: any)=>{console.log(data)});
    this.dialogRef.close();
  }

}
