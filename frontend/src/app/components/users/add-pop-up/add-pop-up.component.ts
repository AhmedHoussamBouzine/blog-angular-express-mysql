import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-pop-up',
  templateUrl: './add-pop-up.component.html',
  styleUrls: ['./add-pop-up.component.css']
})
export class AddPopUpComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddPopUpComponent>) { }

  ngOnInit(): void {
  }
  close(){
    this.dialogRef.close();
  }
}
