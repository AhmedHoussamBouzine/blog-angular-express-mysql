import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-user-pop-up',
  templateUrl: './update-user-pop-up.component.html',
  styleUrls: ['./update-user-pop-up.component.css']
})
export class UpdateUserPopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UpdateUserPopUpComponent>) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }

}
