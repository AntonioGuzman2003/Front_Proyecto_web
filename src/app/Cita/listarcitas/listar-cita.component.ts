import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Cita } from '../../Modelo/Cita';

@Component({
  selector: 'app-listar-citas',
  templateUrl: './listar-cita.component.html',
  styleUrls: ['./listar-cita.component.css']
})
export class ListarCitaComponent implements OnInit {
  citas: Cita[] = [];

  constructor(private service: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.service.getCitas().subscribe(data => {
      this.citas = data;
    });
  }
  Nuevocita(){
    this.router.navigate(["addcita"]);
  }
  editarCita(id: number): void {
    this.router.navigate(['/editcita', id]);
  }

  Delete(cita: Cita): void {
    this.service.deleteCita(cita.id).subscribe(() => {
      this.citas = this.citas.filter(c => c !== cita);
      alert('Cita eliminada');
    });
  }
  
}
