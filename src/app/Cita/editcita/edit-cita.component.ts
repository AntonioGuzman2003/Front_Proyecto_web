import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Cita } from '../../Modelo/Cita';

@Component({
  selector: 'app-edit-cita',
  templateUrl: './edit-cita.component.html',
  styleUrls: ['./edit-cita.component.css']
})
export class EditCitaComponent implements OnInit {
  cita: Cita = new Cita();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: ServiceService
  ) {}

  ngOnInit() {
    this.editarCita();
  }

  editarCita() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.service.getCitaId(id).subscribe((data: Cita) => {
        this.cita = data;
      }, (error) => {
        console.error('Error al obtener la cita:', error);
        this.router.navigate(['/']); // Manejo de errores, redirigir a la página principal o manejar según tu aplicación
      });
    } else {
      console.error('ID de cita no proporcionado');
      this.router.navigate(['/']); // Redirigir a la página principal si no se proporciona un ID válido
    }
  }

  actualizarCita() {
    this.service.updateCita(this.cita).subscribe((data: Cita) => {
      this.cita = data;
      alert('La cita se actualizó exitosamente');
      this.router.navigate(['/listarcitas']); // Redirigir a la lista de citas después de actualizar
    }, (error) => {
      console.error('Error al actualizar la cita:', error);
      // Manejar el error según tu lógica de aplicación
    });
  }
}
