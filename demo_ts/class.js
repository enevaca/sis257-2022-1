"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = exports.Persona = void 0;
class Persona {
    constructor(id, nombre, apellido) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
        //return "";
    }
}
exports.Persona = Persona;
class Estudiante extends Persona {
    constructor(id, nombre, apellido, cu) {
        super(id, nombre, apellido);
        this.cu = cu;
    }
    saludar() {
        console.log(`mi CU es ${this.cu}`);
    }
}
exports.Estudiante = Estudiante;
// var p: Persona = new Persona(1, "Noel", "Vaca");
// p.saludar();
var es = new Estudiante(1, "Noel", "Vaca", "35-5555");
es.saludar();
