import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../service/auth/auth-service.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  AgregarFormGroup : FormGroup;
  ModificarFormGroup : FormGroup;
  EliminarFormGroup : FormGroup;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  bandera = 1;

  constructor(private _formBuilder:FormBuilder, private _authServiceService : AuthServiceService) { }

  

  ngOnInit(): void {
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

  aceptar(){
    
  }

  agregar(){
    const data = this.AgregarFormGroup.value;
    data.age = Number(data.age);
    if(data.name && data.age && data.e_mail){
      console.log("excelente")
      this._authServiceService.post(data.name, data.age, data.e_mail).subscribe(access => {
        console.log(access)
      },error => {
        console.log(error)
      }
      );
    }
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

  }
  
}


/**
 * @title Basic use of `<table mat-table>`
 */

