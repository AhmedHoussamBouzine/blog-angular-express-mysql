import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Utilisateur } from '../models/Utilisateur';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from 'src/environments/environment';
import { Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  users = new Subject<Utilisateur[]>();

  constructor(private http: HttpClient) { }

  create(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(`${BASE_URL}/utilisateurs`, utilisateur);
  }


  update(utilisateur: Utilisateur): Observable<Utilisateur> {
    return this.http.patch<Utilisateur>(`${BASE_URL}/utilisateurs`, utilisateur);
  }

  delete(idUtilisateur: number): Observable<Utilisateur> {
    return this.http.delete<Utilisateur>(`${BASE_URL}/utilisateurs/${idUtilisateur}`)
  }


  getAll() {
    this.http.get<Utilisateur[]>(`${BASE_URL}/utilisateurs?take=20&skip=0`).subscribe(data => {
      this.users.next(data);
    })
    return this.users.asObservable();
  }
  getById(idUtilisateur: number) {
    return this.http.get(`${BASE_URL}/utilisateurs/${idUtilisateur}`);
  }

  private emitUsersUpdated() {
    this.http.get<any[]>(`${BASE_URL}/utilisateurs`)
      .subscribe({
        next: (users: any[]) => {
          this.users.next(users);
        },
        error: (error: any) => {
          console.error('Error fetching objects:', error);
        }
      });
  }


}
