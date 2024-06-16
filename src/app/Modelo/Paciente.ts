export class Paciente {
    id: number;
    nombre: string;
    edad: number;
    telefono: number;

    constructor(id: number = 0, nombre: string = '', edad: number = 0, telefono: number = 0) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
}