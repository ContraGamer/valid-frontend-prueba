import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {path: 'listaUsuarios', component:ListaComponent},
  {path: '', pathMatch:'full' ,redirectTo:'listaUsuarios'},
  {path:'formulario',component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
