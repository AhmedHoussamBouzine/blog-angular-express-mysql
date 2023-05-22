import { Injectable } from '@angular/core';
import { Article } from '../models/Article';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { BASE_URL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class articleService {

  subject = new Subject<Article[]>();

  constructor(private http: HttpClient) { }

  create(article: Article): Observable<Article> {
    return this.http.post<Article>(`${BASE_URL}/articles`, article);
  }


  update(article: Article): Observable<Article> {
    return this.http.patch<Article>(`${BASE_URL}/articles`, article);
  }

  delete(idArticle: number): Observable<Article> {
    return this.http.delete<Article>(`${BASE_URL}/articles/${idArticle}`)
  }

  getAll() {
    this.http.get<Article[]>(`${BASE_URL}/articles?take=1&skip=0`).subscribe(data => {
      this.subject.next(data);
    })
    return this.subject.asObservable();
  }
  getTen() {
    this.http.get<Article[]>(`${BASE_URL}/articles/lasttenarticles`).subscribe(data => {
      this.subject.next(data);
    })
    return this.subject.asObservable();
  }
  getById(id: number) {
    return this.http.get(`${BASE_URL}/articles/${id}`);
  }
}
