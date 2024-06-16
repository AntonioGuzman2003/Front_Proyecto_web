import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../Modelo/Paciente';
import { Cita } from '../Modelo/Cita';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private Url = 'http://localhost:8080/daw';

  constructor(private http: HttpClient) { }

  getPacientes(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.Url}/pacientes`);
  }

  createPaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(`${this.Url}/pacientes`, paciente);
  }

  getPacienteId(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.Url}/pacientes/${id}`);
  }

  updatePaciente(paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${this.Url}/pacientes/${paciente.id}`, paciente);
  }

  deletePaciente(id: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/pacientes/${id}`);
  }

  getCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.Url}/citas`);
  }
  
  createCita(cita: Cita): Observable<Cita> {
    return this.http.post<Cita>(`${this.Url}/citas`, cita);
  }
  
  getCitaId(id: number): Observable<Cita> {
    return this.http.get<Cita>(`${this.Url}/citas/${id}`);
  }
  
  updateCita(cita: Cita): Observable<Cita> {
    return this.http.put<Cita>(`${this.Url}/citas/${cita.id}`, cita);
  }
  
  deleteCita(id: number): Observable<void> { 
    return this.http.delete<void>(`${this.Url}/citas/${id}`);
  }  
}
