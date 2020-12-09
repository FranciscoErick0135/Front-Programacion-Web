import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  cerrar_sesion(){
    localStorage.removeItem('user');
    window.location.href = 'http://localhost:4200/login';
    this._router.navigate(['/']);
  }

}
