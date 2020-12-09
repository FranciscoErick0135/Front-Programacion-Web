import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FireauthService } from '../fireauth.service';
import { AuthServiceService } from '../service/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup : FormGroup;

  constructor(private _formBuilder:FormBuilder, private _authServiceService : AuthServiceService, private fire:FireauthService, private _router: Router) {
    if(_authServiceService.isAuthenticat()){
      _router.navigate(['dashboard']) 
    }
   }
  
  ngOnInit(): void {
    this.loginFormGroup = this._formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login(): void{
    const data = this.loginFormGroup.value;
    if(data.user && data.password){
      this._authServiceService.login(data.user, data.password).subscribe(access => {
        localStorage.setItem('user', JSON.stringify(access));
        window.location.href = 'http://localhost:4200/dashboard';
        //this._router.navigate(['/']);

      },error => {
        
      }
      );
    }
  }

  LoginGoogle(){
    this.fire.signInWithGoogle();
  }

}
