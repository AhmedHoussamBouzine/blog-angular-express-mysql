import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data/data.service';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role = '';
  islogged: boolean = false;
  loggedUser: any;
  constructor(private auth: AuthServiceService) { }

  ngOnInit(): void {
    this.role = this.auth.loggedUser.role;
    this.islogged = this.auth.isloggedIn;
    this.loggedUser = this.auth.loggedUser;
    console.log(this.islogged);
    console.log(this.loggedUser);
  }
  logout() {
    this.auth.logout();
  }

}
