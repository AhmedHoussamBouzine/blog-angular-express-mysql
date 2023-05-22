import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/core/data/data.service';
import { articleService } from 'src/app/core/services/article.service';

@Component({
  selector: 'app-delete-pop-up',
  templateUrl: './delete-pop-up.component.html',
  styleUrls: ['./delete-pop-up.component.css']
})
export class DeletePopUpComponent implements OnInit {
  id:any;
  constructor(public dialogRef: MatDialogRef<DeletePopUpComponent>, private articleService: articleService, private dataStorage: DataService) { }
  user!: any;
  ngOnInit(): void {
    this.user = this.dataStorage.user;
    this.id = this.dataStorage.articleCrud.id;
    console.log(this.user);
  }
  close() {
    this.dialogRef.close();
  }
  onDelete() {
    this.articleService.delete(this.id).subscribe({
      next: (data) => { console.log(data); },
      error: (error) => { console.log(error); }
    });
    this.dialogRef.close();

  }

}
