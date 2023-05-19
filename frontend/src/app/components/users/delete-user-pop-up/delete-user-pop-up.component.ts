import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user-pop-up',
  templateUrl: './delete-user-pop-up.component.html',
  styleUrls: ['./delete-user-pop-up.component.css']
})
export class DeleteUserPopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteUserPopUpComponent>) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }

}
