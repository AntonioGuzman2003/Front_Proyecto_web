import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { Paciente } from '../../Modelo/Paciente';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'] // Cambié `styleUrl` a `styleUrls`
})
export class EditComponent implements OnInit {
  paciente: Paciente = new Paciente();

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {
    this.Editar();
  }

  Editar() {
    const id = localStorage.getItem("id");
    if (id) {
      this.service.getPacienteId(+id).subscribe((data: Paciente) => {
        this.paciente = data;
      });
    } else {
      console.error('No se encontró el ID en localStorage.');
      // Aquí podrías redirigir a una página de error o manejarlo de otra forma
      this.router.navigate(['/']); // Redirigir al inicio, por ejemplo
    }
  }

  Actualizar(paciente: Paciente) {
    this.service.updatePaciente(paciente).subscribe((data: Paciente) => {
      this.paciente = data;
      alert("Se Actualizó con Éxito");
      this.router.navigate(["listar"]);
    });
  }
}
