import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FireauthService } from '../fireauth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../service/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers : [AngularFireAuth, FireauthService]
})
export class RegisterComponent implements OnInit {
  registerFormGroup : FormGroup;

  constructor(private _formBuilder:FormBuilder, private fire:FireauthService, private _authServiceService : AuthServiceService, private _router: Router) { }

  ngOnInit(): void {
    this.registerFormGroup = this._formBuilder.group({
      user: ['', Validators.required],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  register(){
    const data = this.registerFormGroup.value;
    if(data.user && data.email && data.password){
      this._authServiceService.register(data.user, data.email, data.password).subscribe(access => {
        localStorage.setItem('user', JSON.stringify(access));
        this._router.navigate(['login']);

      },error => {
        console.log(error);
      }
      );
    }
    
  } 

  registerGoogle(){
    this.fire.signInWithGoogle();
  }


}
