import { Component, OnInit } from '@angular/core';
import { FireauthService } from '../fireauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fire:FireauthService) { }

  ngOnInit(): void {
  }

  LoginGoogle(){
    this.fire.signInWithGoogle();
  }

}
