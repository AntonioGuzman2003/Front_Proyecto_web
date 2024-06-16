import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Cita } from '../../Modelo/Cita';

@Component({
  selector: 'app-add',
  templateUrl: './add-cita.component.html',
  styleUrls: ['./add-cita.component.css']
})
export class AddCitaComponent implements OnInit {
  cita: Cita = new Cita();

  constructor(private router: Router, private service: ServiceService) {}

  ngOnInit() {
  }

  Guardarcita() {
    this.service.createCita(this.cita)
      .subscribe(data => {
        alert("Se agregó correctamente");
        this.router.navigate(["listarcitas"]);
      });
  }
}
