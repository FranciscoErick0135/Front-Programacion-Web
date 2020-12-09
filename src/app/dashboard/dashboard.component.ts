import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../service/auth/auth-service.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  AgregarFormGroup : FormGroup;
  ModificarFormGroup : FormGroup;
  EliminarFormGroup : FormGroup;
  bandera = 1;
  usuarios = [];
  info = "No hay datos";
  link = "http://localhost:4200/dashboard";


  constructor(private _formBuilder:FormBuilder, private _authServiceService : AuthServiceService, private _router: Router) { }

  

  ngOnInit(): void {

    this._authServiceService.get().subscribe((data : any []) =>{
      console.log(data);
      this.usuarios = data;
    });

    this.AgregarFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
      e_mail: ['', Validators.required]
    })

    this.ModificarFormGroup = this._formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      e_mail: ['', Validators.required]
    })

    this.EliminarFormGroup = this._formBuilder.group({
      id: ['', Validators.required],
    })
  }

  vista_agregar(){
    this.bandera=1;
  }

  vista_modificar(){
    this.bandera=2;
  }

  vista_borrar(){
    this.bandera=3
  }


  agregar(){
    const data = this.AgregarFormGroup.value;
    data.age = Number(data.age);
    if(data.name && data.age && data.e_mail){
      this._authServiceService.post(data.name, data.age, data.e_mail).subscribe(access => {
        console.log(access)
      },error => {
        console.log(error)
      }
      );
    }
    
      window.location.href = this.link;
  }

  modificar(){
    const data = this.ModificarFormGroup.value;
    data.id = Number(data.id);
    data.age = Number(data.age);
    if(data.id && data.name && data.age && data.e_mail){
      this._authServiceService.put(data.id, data.name, data.age , data.e_mail).subscribe(access => {
        console.log(access)
      },error => {
        console.log(error)
      }
      );
    }
      window.location.href = this.link;
  }

  borrar(){
    const data = this.EliminarFormGroup.value;
    data.id = Number(data.id);
    if(data.id){
      this._authServiceService.delete(data.id).subscribe(access => {
        console.log(access)
      },error => {
        console.log(error)
      }
      );
    }
       window.location.href = this.link;
  }
  
}


/**
 * @title Basic use of `<table mat-table>`
 */

