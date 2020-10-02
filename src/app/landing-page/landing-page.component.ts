import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

//Decoradores
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  info: String ="No hay datos";
  nameButton: String = "Mostrar"
  status: boolean = false;
  products = [];

  constructor(private serviceService : ServiceService) { 

  }

  ngOnInit(): void {
  }

  sendService(){
    this.serviceService.getProduct("products").subscribe((data : any[]) =>{
    this.products = data;
      
    });
  }

  cleanService(){
    this.products = [];
  }

  showHide(){
    this.status = !this.status;
    if(this.status){
      this.nameButton = "Ocultar";
    }else{
      this.nameButton = "Mostrar";
    }
  }
}
