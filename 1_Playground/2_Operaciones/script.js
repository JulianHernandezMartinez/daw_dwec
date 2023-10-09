'use strict'
console.log('Hola, PicoCSS!');

const mydiv = document.querySelector('#mydiv');


const Nombre = 'Pepe';
const Apellido = 'Peres'

console.log(15%4)
console.log(2**4)

console.log (Nombre+' '+Apellido)
console.log(String(7))
console.log(+String(7))
let km = 7;


/* Modify-in-place */
console.log(km+=3,km-=7,km*=2)

console.log(++km,--km, --km,--km)
console.log(km)

/* comma operator */
let x = 1;

x = (x++, x, x++,x);

console.log(x);
// Expected output: 3

x = (2, 3);

console.log(x);
// Expected output: 3


mydiv.textContent = 'Variables y Conversiones?';

/* Condicionales */
const tres = 3;
const cuatro = 4;
const four = 4;

tres>cuatro? console.log('se cumple 3<4'):console.log('no se cumple 3>4');
cuatro>tres? console.log('se cumple 3<4'):console.log('no se cumple 4>3');



