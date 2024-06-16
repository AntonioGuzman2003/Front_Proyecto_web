import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Paciente } from '../../Modelo/Paciente';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
  pacientes: Paciente[] = []; 
  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(){
      this.service.getPacientes().subscribe(data=>{
        this.pacientes=data;
      })
  }
  Nuevo(){
    this.router.navigate(["add"]);
  }
  Editar(paciente: Paciente): void {
    if (paciente.id !== undefined) {
      localStorage.setItem("id", paciente.id.toString());
      this.router.navigate(["edit"]);
    } else {
      console.error('Paciente no tiene un _id');
    }
  }
  Delete(paciente: Paciente) {
    this.service.deletePaciente(paciente.id)
    .subscribe(data=>{
      this.pacientes=this.pacientes.filter(p=>p!==paciente);
      alert('paciente eliminado');
})
}
}