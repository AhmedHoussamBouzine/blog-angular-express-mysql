import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './core/services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private token:AuthServiceService){}

  ngOnInit(): void {
    this.token.loadToken();
  }
}
