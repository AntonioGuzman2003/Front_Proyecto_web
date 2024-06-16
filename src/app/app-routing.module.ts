import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Paciente/listar/listar.component'; 
import { AddComponent } from './Paciente/add/add.component';
import { EditComponent } from './Paciente/edit/edit.component';
import { ListarCitaComponent } from './Cita/listarcitas/listar-cita.component'; 
import { AddCitaComponent } from './Cita/addcita/add-cita.component'; 
import { EditCitaComponent } from './Cita/editcita/edit-cita.component';

const routes: Routes = [
  { path: 'listar', component: ListarComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent },
  { path: 'listarcitas', component: ListarCitaComponent }, 
  { path: 'addcita', component: AddCitaComponent }, 
  { path: 'editcita/:id', component: EditCitaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
