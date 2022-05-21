//console.log("Hola Mundo...!!!");
import { Estudiante } from "./class"
// Boolean
let esActivo: boolean = false;

// Number
let entero: number = 5;
let decimal: number = 6.4;
let octal: number = 0o55;
let binario: number = 0xffd;

// String
let candena: string = "Hola SIS257";
candena = ' Hola de nuevo SIS257  ';
let longitud: number = candena.length;
let subcadena: string = candena.substring(0, 4);
let mayuscula: string = candena.toUpperCase();
let minuscula: string = candena.toLowerCase();
let reemplazo: string = candena.replace(/ /g, "_");
let sinEspacios: string = candena.trim().replace(/ /g, "_").toUpperCase();
let concatenar: string = "OK. " + candena;
let concatenar2: string = `OK. ${candena}`;

// Array
let separar: string[] = candena.trim().split(' ');
let arreglo: number[] = [1, 2, 3];
let arreglo2: Array<number> = [1, 2, 3];
arreglo[0] = 6;

// Tuple
let tuple = ["Hola", 5, 6.9, true];

// Enum
enum Color { red = "rojo", yellow = "amarillo", green = "verde" }; 
let e: string = Color.yellow;

// Any
let cualquiera: any = "cadena";
cualquiera = 6.8;

// Object
let objeto: object = { id: 1, nombre: "Juan", apellido: "Vaca" };
let arr: string[] = [ "rojo", "amarillo", "verde" ]; 

// iterators
for(let i in arr) { console.log(i); }
for(let i of arr) { console.log(i); }
//while(condicion) {} // do {} while(condicion)

// Modules
var es: Estudiante = new Estudiante(1, "Noel", "Vaca", "35-5555");
es.saludar();
