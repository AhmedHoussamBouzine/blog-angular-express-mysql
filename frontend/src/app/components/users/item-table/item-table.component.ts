import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateUserPopUpComponent } from '../update-user-pop-up/update-user-pop-up.component';
import { DeleteUserPopUpComponent } from '../delete-user-pop-up/delete-user-pop-up.component';
import { DataService } from 'src/app/core/data/data.service';

@Component({
  selector: 'app-item-table',
  templateUrl: './item-table.component.html',
  styleUrls: ['./item-table.component.css']
})
export class ItemTableComponent implements OnInit {
  @Input() utilisateur:any;
  @Input() id:any;

  constructor(public dialog: MatDialog,private dataStorage:DataService) { }

  ngOnInit(): void {
  }


  onDialogModifyUser(): void {
    const dialogRef = this.dialog.open(UpdateUserPopUpComponent);
    this.dataStorage.user=this.utilisateur;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  onDialogDeleteUser(): void {
    const dialogRef = this.dialog.open(DeleteUserPopUpComponent);
    this.dataStorage.user=this.utilisateur;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
