import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/Usuario';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  lista: Usuario[];
  dato: Usuario;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<Usuario[]>(environment.apiUrl + 'listAll').subscribe(data => this.lista = data);
  }

  procesar(usuario: Usuario) {
    usuario.procesado=true;
    this.http.post<Usuario>(environment.apiUrl + "addUpdate", usuario).subscribe(data => this.dato = data, err => this.dato = err);
    this.router.navigate(['/listaUsuarios']);
  }

  agregar() {
    this.router.navigate(['/formulario']);
  }

}
