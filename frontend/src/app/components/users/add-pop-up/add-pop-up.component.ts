import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Utilisateur } from '../../../core/models/Utilisateur';
import { UtilisateurService } from 'src/app/core/services/utilisateur.service';

@Component({
  selector: 'app-add-pop-up',
  templateUrl: './add-pop-up.component.html',
  styleUrls: ['./add-pop-up.component.css']
})
export class AddPopUpUserComponent implements OnInit {
  public form = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl('', [Validators.required]),
  });
  constructor(public dialogRef: MatDialogRef<AddPopUpUserComponent>, private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close();
  }
  onAdd() {
    var utilisateur: Utilisateur = {
      nom: this.form.get('nom')?.value,
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      role: 'AUTHOR'
    }
    this.utilisateurService.create(utilisateur).subscribe(
      {
        next: (data) => { console.log(data); },
        error: (error) => { console.log(error); }
      });
    this.dialogRef.close();
  }
}
