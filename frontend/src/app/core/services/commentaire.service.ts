import { Injectable } from '@angular/core';
import { Commentaire } from '../models/Commentaire';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  subject =new Subject<Commentaire[]>();
  constructor(private http: HttpClient) { }

  create(commentaire :Commentaire): Observable<Commentaire> {
    return this.http.post<Commentaire>(`${BASE_URL}/commentaires`,commentaire);
  }


  update(idCommentaire: number,commentaire:Commentaire): Observable<Commentaire> {
    return this.http.patch<Commentaire>(`${BASE_URL}/commentaires/${idCommentaire}`,commentaire);
  }

  delete(idCommentaire: number): Observable<Commentaire> {
    return this.http.delete<Commentaire>(`${BASE_URL}/commentaires/${idCommentaire}`)
  }

  getAll() {
    this.http.get<Commentaire[]>(`${BASE_URL}/commentaires?take=20&skip=0`).subscribe(data =>
      {
        this.subject.next(data);
      })
    return this.subject.asObservable();
  }
  getById(idCommentaire:number){
    return  this.http.get(`${BASE_URL}/commentaires/${idCommentaire}`);
  }
}
