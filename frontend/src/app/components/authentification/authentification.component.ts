import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  email!: string;
  password!: string;
  constructor(private authService: AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  onLogin() {
    this.authService.signIn({ email: this.email, password: this.password }).subscribe(data => {
      this.authService.saveToken(data.token, data.user);
      this.router.navigateByUrl('/');
    })
  }


}
