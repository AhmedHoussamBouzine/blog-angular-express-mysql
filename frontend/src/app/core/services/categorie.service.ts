import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';
import { Categorie } from '../models/Categorie';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  subject =new Subject<Categorie[]>();
  constructor(private http: HttpClient) { }

  create(categorie :Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(`${BASE_URL}/categories`,categorie);
  }


  update(idCategorie: number,categorie:Categorie): Observable<Categorie> {
    return this.http.patch<Categorie>(`${BASE_URL}/categories/${idCategorie}`,categorie);
  }

  delete(idCategorie: number): Observable<Categorie> {
    return this.http.delete<Categorie>(`${BASE_URL}/categories/${idCategorie}`)
  }

  getAll() {
    this.http.get<Categorie[]>(`${BASE_URL}/categories?take=20&skip=0`).subscribe(data =>
      {
        this.subject.next(data);
      })
    return this.subject.asObservable();
  }
  getById(id:number){
    return  this.http.get(`${BASE_URL}/categories/${id}`);
  }
}
