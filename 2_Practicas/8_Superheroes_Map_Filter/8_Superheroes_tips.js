
'use strict';

// ejercicio 1
console.log ('tip ejercicio 1 array filter');

const arr = [0,1,2,3];
const filtrado = arr.filter( x => x > 1 );
console.log(arr[1], arr[3]);
console.log(arr);
console.log(filtrado);


console.log ('Punto de partida, objeto superHeroes');
const superHeroes = [
    {nombre:'Batman',tipo:'DC'},
    {nombre:'Linterna Verde',tipo:'DC'},
    {nombre:'Lobezno',tipo:'Marvel'},
    {nombre:'Spiderman',tipo:'Marvel'},
]
console.log(superHeroes);


/* 1.- Realiza una función que se le pasen como 
parámetros la lista y el tipo. Debe devolver 
una lista únicamente con los elementos del 
tipo indicado
*/

console.log('Ejercicio 1');
const ejer1 = (lista, tipo) => lista.filter(el => el.tipo === tipo);



// Ejercicio2 : 
/* Tenemos que cambiar el nombre de todos los 
super héroes de DC a ‘CAMBIADO’ un espacio en 
blanco y el nombre del super Héroe
Solución***/

// map - Mapeo
console.log ('tip ejercicio 2 array map');

const mapeado = arr.map( x => x ** 2 )
console.log(mapeado)

console.log('Ejercicio 2');


// Ejercicio 3: 
/* 
Muestra en pantalla la cantidad de super Heroes 
de DC que existen en la tabla
*/ 

console.log ('tip ejercicio 3 array reduce');

// En este caso devuelve un único valor 
// después de aplicar una función a los 
// elementos del array:

const suma = arr.reduce((acumulador,elemento)=>acumulador + elemento,0);

console.log('Ejercicio 3');
  

// Ejercicio 4.
console.log('ejercicio 4');

// Ahora la tabla es esta:

const superHeroes2 = [ 
	'{"nombre":"Batman", "tipo":"DC"}',
	'{"nombre":"Linterna Verde", "tipo":"DC"}',
	'{"nombre":"Lobezno", "tipo":"Marvel"}',
	'{"nombre":"Spiderman", "tipo":"Marvel"}',
];

/* Observa que es una lista de cadenas con 
formato JSON, pero no es JSON. */

/* a) crea una nueva lista con elementos 
objetos JavaScript (Investiga, investiga…) */

// https://www.w3schools.com/js/js_json_parse.asp

console.log('ejercicio 4 a');



/* b) filtra únicamente los elementos de Marvel
*/
console.log('ejercicio 4 b');

/*
5.- Añade, en superHeroes, dos nuevos super 
Héroes al final de la lista

tip -> spread ... esparce elementos ...
*/

/*
6.- Añade otros dos superHeroes al inicio de la lista

tip -> spread ... esparce elementos ...
*/


/*7.- Ordena, alfabéticamente, los superHeroes por 
nombre (investiga)
*/

console.log ('Ejercicio 7');


[11,2,22,1].sort((a, b) => a - b);




/*
8.- Ordena, alfabéticamente, los superHeroes por 
tipo (Bueno, ya lo habías investigado antes…)
*/


/*
9.-  Crea una lista únicamente con los nombres de 
los superHéroes como cadenas de caracteres.

tip mapea 

*/
otra.map(el => el.nombre)

/* 
10.- Lo mismo que en 9 pero esta vez debe ser una 
lista de objetos del tipo { nombre: ‘Batman’ }

tip mapea */

