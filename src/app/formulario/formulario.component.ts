import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelo/Usuario';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  private usuario:Usuario;
  public formEditAdd;
  dato: Usuario;

  constructor(private router:Router, private http:HttpClient) {
    this.usuario= new Usuario();
    this.formEditAdd = new FormGroup({
      id: new FormControl(this.usuario.id),
      nombre: new FormControl(this.usuario.nombre),
      apellido: new FormControl(this.usuario.apellido),
      procesado: new FormControl(this.usuario.procesado),
    });
   }

  ngOnInit(): void {
  }

  
  onSubmit() {
    this.usuario=this.formEditAdd.value;
    this.usuario.procesado=false;
    this.http.post<Usuario>(environment.apiUrl+"addUpdate",this.usuario).subscribe(data=>this.dato=data,err=>this.dato=err);
    console.log(this.dato);
    this.router.navigate(['/listaUsuarios']);
  }

  atras(){
    this.router.navigate(['/listaUsuarios']);
  }

}
