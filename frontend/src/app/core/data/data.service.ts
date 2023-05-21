import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  role:string = "ADMIN";
  articleId?: number;
  article:any;
  constructor() { }
}
