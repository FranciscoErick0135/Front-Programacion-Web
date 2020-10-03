import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import {AngularFireModule} from '@angular/fire'
import {AngularFireAuthModule} from '@angular/fire/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBIg1SRO0Rpdudc5AhjwTNDsJCISPeuZd4",
  authDomain: "angular---deploy.firebaseapp.com",
  databaseURL: "https://angular---deploy.firebaseio.com",
  projectId: "angular---deploy",
  storageBucket: "angular---deploy.appspot.com",
  messagingSenderId: "316140202849",
  appId: "1:316140202849:web:6133b7bfc0dab181c1b320",
  measurementId: "G-Z7TE2LTZ66"
};

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
