export class Cita {
  id: number;
  motivo: string;
  fechaHoraCita: Date;
  pacienteId: number;
  medicoAsignado: string;
  estado: string;

  constructor(
      id: number = 0, 
      motivo: string = '', 
      fechaHoraCita: Date = new Date(), 
      pacienteId: number = 0, 
      medicoAsignado: string = '', 
      estado: string = ''
  ) {
      this.id = id;
      this.motivo = motivo;
      this.fechaHoraCita = fechaHoraCita;
      this.pacienteId = pacienteId;
      this.medicoAsignado = medicoAsignado;
      this.estado = estado;
  }
}
