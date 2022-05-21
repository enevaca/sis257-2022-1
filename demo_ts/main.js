"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//console.log("Hola Mundo...!!!");
const class_1 = require("./class");
// Boolean
let esActivo = false;
// Number
let entero = 5;
let decimal = 6.4;
let octal = 0o55;
let binario = 0xffd;
// String
let candena = "Hola SIS257";
candena = ' Hola de nuevo SIS257  ';
let longitud = candena.length;
let subcadena = candena.substring(0, 4);
let mayuscula = candena.toUpperCase();
let minuscula = candena.toLowerCase();
let reemplazo = candena.replace(/ /g, "_");
let sinEspacios = candena.trim().replace(/ /g, "_").toUpperCase();
let concatenar = "OK. " + candena;
let concatenar2 = `OK. ${candena}`;
// Array
let separar = candena.trim().split(' ');
let arreglo = [1, 2, 3];
let arreglo2 = [1, 2, 3];
arreglo[0] = 6;
// Tuple
let tuple = ["Hola", 5, 6.9, true];
// Enum
var Color;
(function (Color) {
    Color["red"] = "rojo";
    Color["yellow"] = "amarillo";
    Color["green"] = "verde";
})(Color || (Color = {}));
;
let e = Color.yellow;
// Any
let cualquiera = "cadena";
cualquiera = 6.8;
// Object
let objeto = { id: 1, nombre: "Juan", apellido: "Vaca" };
let arr = ["rojo", "amarillo", "verde"];
// iterators
for (let i in arr) {
    console.log(i);
}
for (let i of arr) {
    console.log(i);
}
//while(condicion) {} // do {} while(condicion)
// Modules
var es = new class_1.Estudiante(1, "Noel", "Vaca", "35-5555");
es.saludar();
