import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Utilisateur } from '../models/Utilisateur';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  subject =new Subject<Utilisateur[]>();
  constructor(private http: HttpClient) { }

  create(utilisateur :Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${BASE_URL}/utilisateurs`,utilisateur);
  }


  update(utilisateur:Utilisateur): Observable<Utilisateur> {
    return this.http.patch<Utilisateur>(`${BASE_URL}/utilisateurs`,utilisateur);
  }

  delete(idUtilisateur: number): Observable<Utilisateur> {
    return this.http.delete<Utilisateur>(`${BASE_URL}/utilisateurs/${idUtilisateur}`)
  }


  getAll() {
    this.http.get<Utilisateur[]>(`${BASE_URL}/utilisateurs?take=20&skip=0`).subscribe(data =>
      {
        this.subject.next(data);
      })
    return this.subject.asObservable();
  }
  getById(idUtilisateur:number){
    return  this.http.get(`${BASE_URL}/utilisateurs/${idUtilisateur}`);
  }
}
