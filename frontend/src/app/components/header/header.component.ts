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
  islogged : boolean = false;
  constructor(private auth:AuthServiceService) { }

  ngOnInit(): void {
    this.role=  this.auth.loggedUser.role ;
    this.islogged = this.auth.isloggedIn;
    console.log(this.islogged);
  }

}
