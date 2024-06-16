import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Paciente } from '../../Modelo/Paciente';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  paciente: Paciente = new Paciente();

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {
  }

  Guardar() {
    this.service.createPaciente(this.paciente)
      .subscribe(data => {
        alert("Se agregó correctamente");
        this.router.navigate(["listar"]);
      });
  }
}
