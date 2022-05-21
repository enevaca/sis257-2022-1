export class Persona {
  id: number;
  nombre: string;
  apellido: string;
  constructor(id: number, nombre: string, apellido: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar(): void {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    //return "";
  }
}

export class Estudiante extends Persona {
  cu: string;
  constructor(id: number, nombre: string, apellido: string, cu: string) {
    super(id, nombre, apellido);
    this.cu = cu;
  }

  saludar(): void {
    console.log(`mi CU es ${this.cu}`);
  }
}
// var p: Persona = new Persona(1, "Noel", "Vaca");
// p.saludar();
var es: Estudiante = new Estudiante(1, "Noel", "Vaca", "35-5555");
es.saludar();