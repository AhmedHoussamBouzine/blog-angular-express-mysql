import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/core/data/data.service';
import { UtilisateurService } from 'src/app/core/services/utilisateur.service';
import { Utilisateur } from 'src/app/core/models/Utilisateur';
@Component({
  selector: 'app-update-user-pop-up',
  templateUrl: './update-user-pop-up.component.html',
  styleUrls: ['./update-user-pop-up.component.css']
})
export class UpdateUserPopUpComponent implements OnInit {

  public form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    oldpassword: new FormControl('', [Validators.required]),
    newpassword: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl('', [Validators.required]),

  });
  constructor(public dialogRef: MatDialogRef<UpdateUserPopUpComponent>,private utilisateurService:UtilisateurService,private dataStorage:DataService) { }

  user!:any;

  ngOnInit(): void {
    this.user=this.dataStorage.user;
    console.log(this.user);
  }
  close(){
    this.dialogRef.close();
  }
  onUpdate() {
    var utilisateur: Utilisateur = {
      id:this.user.id,
      nom: this.form.get('nom')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('newpassword')?.value,
      role: 'AUTHOR'
    }
    this.utilisateurService.update(utilisateur).subscribe(
      {
        next: (data) => { console.log(data); },
        error: (error) => { console.log(error); }
      });
    this.dialogRef.close();
  }

}
