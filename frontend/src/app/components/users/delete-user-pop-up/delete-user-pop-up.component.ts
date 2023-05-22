import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/core/data/data.service';
import { UtilisateurService } from 'src/app/core/services/utilisateur.service';

@Component({
  selector: 'app-delete-user-pop-up',
  templateUrl: './delete-user-pop-up.component.html',
  styleUrls: ['./delete-user-pop-up.component.css']
})
export class DeleteUserPopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteUserPopUpComponent>, private utilisateurService: UtilisateurService, private dataStorage: DataService) { }

  user!: any;
  ngOnInit(): void {
    this.user = this.dataStorage.user;
    console.log(this.user);
  }
  close() {
    this.dialogRef.close();
  }
  onDelete() {
    this.utilisateurService.delete(this.user.id).subscribe({
      next: (data) => { console.log(data); },
      error: (error) => { console.log(error); }
    });
    this.dialogRef.close();

  }

}
