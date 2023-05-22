import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/core/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nom!:string;
  email!: string;
  password!: string;
  confirmpassword!:string;
  constructor(private authService: AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  onSignUp() {
    this.authService.signUp({ nom:this.nom ,email: this.email, password: this.password }).subscribe(data => {
      this.router.navigateByUrl('/login');
    })
  }

}
