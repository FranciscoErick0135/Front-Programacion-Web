import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FireauthService } from '../fireauth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers : [AngularFireAuth, FireauthService]
})
export class RegisterComponent implements OnInit {

  constructor(private fire:FireauthService) { }

  ngOnInit(): void {
  }

  register(email : string, password : string){
    this.fire.register(email,password);
  }

  registerGoogle(){
    this.fire.signInWithGoogle();
  }

}
