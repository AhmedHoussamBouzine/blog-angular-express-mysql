import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/core/data/data.service';
import { CategorieService } from 'src/app/core/services/categorie.service';

@Component({
  selector: 'app-delete-categorie-pop-up',
  templateUrl: './delete-categorie-pop-up.component.html',
  styleUrls: ['./delete-categorie-pop-up.component.css']
})
export class DeleteCategoriePopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteCategoriePopUpComponent>, private dataService: DataService, private categorieService: CategorieService) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }
  deleteCategorie() {
    this.categorieService.delete(this.dataService.categorie.id).subscribe(data => {
      console.log(data);
      this.close();
    })
  }
}
