import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  api = 'http://localhost:8000/'
  user = JSON.parse(localStorage.getItem('user'));

  constructor( private http: HttpClient ) { }

  isAuthenticat (): boolean {
    
    if(this.user){
      return this.user ['token']? true : false
    }else{
      return false;
    }
  }


  login(username: string, password: string) : Observable<any>{
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
        'accept' : 'application/json',
  
      })
    };
    return this.http.post(`${this.api}api/v1/login/`, {username, password}, httpOptions);
  }

  post(nombre: string, edad: number, correo: string){
    console.log(this.user ['token'])
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${this.user ['token']}`,
        'accept' : 'application/json',
      })
    };
    return this.http.post(`${this.api}api/v1/profile/profilePerson_url/`, {nombre, edad, correo}, httpOptions);
  }

  get(){
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${this.user ['token']}`
      })
    };
    return this.http.get(`${this.api}api/v1/profile/profilePerson_url/`, httpOptions);
  }

  put(id : number, nombre: string, edad : number, correo : string){
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${this.user ['token']}`,
        'accept' : 'application/json',
      })
    };
    return this.http.put(`${this.api}api/v1/profile/profilePerson_url/`, {'id':id, 'nombre':nombre, 'edad':edad, 'correo':correo}, httpOptions);
  }

  delete(id : number){
    const httpOptions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
        'Authorization' : `Token ${this.user ['token']}`,
        'accept' : 'application/json',
      }),
      body:{
        'id': `${id}`
      }

    };
    return this.http.delete(`${this.api}api/v1/profile/profilePerson_url/`, httpOptions);
  }

}
