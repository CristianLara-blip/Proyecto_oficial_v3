import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { LoginUsuario } from 'src/app/models/login-usuario';

import { AuthService } from 'src/app/service/auth.service';

import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoginFail = false;
  loginUsuario: LoginUsuario;
 

  nombreUsuario: string;
  password: string;
  roles: string[] = [];
  errMsj: string;
  constructor( 
   
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    ) {}

  ngOnInit() {
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }


  
  onLogin(): void {

   

    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        
        this.router.navigate(['/inicio']);
      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
       
        console.log(err.error.message);
      }
    );
  }
}
