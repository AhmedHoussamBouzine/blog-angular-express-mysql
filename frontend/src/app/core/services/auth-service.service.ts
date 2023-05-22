import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BASE_URL_LOGIN } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token:any;
  isloggedIn:boolean = false;
  loggedUser:any;

  constructor(private http:HttpClient,private router:Router) { }
  apiURL = BASE_URL_LOGIN;


  signIn(user:any){
    return this.http.post<any>(`${this.apiURL}/signin`,user);
  }

  saveToken(jwt:any,user:any){
    localStorage.setItem('jwt',jwt);
    localStorage.setItem('user',JSON.stringify(user));
    this.token = jwt;
    this.loggedUser = JSON.stringify(user);
    this.isloggedIn = true;
  }

  getToken():string {
    return this.token;
  }

  loadToken() {
    this.token = localStorage.getItem('jwt');
    let user = localStorage.getItem('user') as string;
    this.loggedUser = JSON.parse(user);
    if(this.token != undefined){
      this.isloggedIn = true;
    }
    console.log(this.token);
    console.log(this.loggedUser);
  }

  logout() {
    this.loggedUser = undefined;
    this.token= undefined;
    this.isloggedIn = false;
    localStorage.removeItem('jwt');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/home');
  }
}
