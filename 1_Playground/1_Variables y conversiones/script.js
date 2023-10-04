'use strict'
console.log('Hola, PicoCSS!');

const mydiv = document.querySelector('#mydiv');
let nombre = 'Julian';
let edad;
let edadenstring;
let edadnumero;
let ciclista = true;
console.log(nombre);
console.log(edad)
edad = null;
console.log (edad)
console.log(typeof(edad))
edad = 25
console.log(typeof(edad))
console.log(typeof(ciclista))
console.log(edad)
edadenstring=String(edad)
console.log(edadenstring)
edadnumero=Number(edadenstring)
console.log(edadnumero)

console.log(Boolean(100/0))
console.log(Boolean('100/0'))
console.log(Boolean(''))
console.log(Number('pepe'))
console.log(Number(Boolean(10/0)))

console.log(15%4)
console.log(2**4)
mydiv.textContent = 'Variables y Conversiones?';



