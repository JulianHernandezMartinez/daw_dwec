// @ts-nocheck
/*
Ejercio 1.

Elabora una función que retorna “true” en caso de que 
se le pase como parámetro de entrada  un número  
entero entre 1 y 200 inclusive, en caso de que no 
se cumplan estas condiciones, retornará “false”.
*/

console.log("Ejercicio 1");
// escribe el código del ejercico 1 aqui

/**
 * Retorna “true” en caso de que la entrada  sea 
 * un número entero entre 1 y 200 inclusive, false en
 * caso de que no cumpla.
 * @param {String} value 
 * @returns {Boolean} "true" si el valor representa un 
 * entero (interger) entre 1 y 200 inclusive, "false" 
 * en caso contrario
 */


function verifyinput(value) {
    // console.log(`${value}`);
    let valuenumber = +value;
    // console.log(valuenumber);
    let result = Number.isInteger(valuenumber) && valuenumber>0 && valuenumber<201;
    // console.log(result);
    return result;
}

console.log("prueba(s) de ejercicio 1");
// escribe aqui la(s) llamada(s) de prueba(s) de ejercicio 1

console.log("valores de pruebas 'F','1','200','0','201','1.5','-1'--> false,true,true,false,false,false,false");
console.log(verifyinput('F'),verifyinput('1'),verifyinput('200'),verifyinput('0'),verifyinput('201'),verifyinput('1.5'),verifyinput('-1'));


console.log (`prueba con valor = 'F'-> "false"-----> ${verifyinput('F')}`, verifyinput('F')); // false is not a number
console.log (`prueba con valor = '1'-> "true"-----> ${verifyinput('1')}`,verifyinput('1')); // true is in range
console.log (`prueba con valor = '200'-> "true"-----> ${verifyinput('200')}`,verifyinput('200')); // true
console.log (`prueba con valor = '0'-> "false"-----> ${verifyinput('0')}`,verifyinput('0')); // false 
console.log (`prueba con valor = '201'-> "false"-----> ${verifyinput('201')}`,verifyinput('201')); // false
console.log (`prueba con valor = '1.5'-> "false"-----> ${verifyinput('1.5')}`,verifyinput('1.5')); // false (no integer)
console.log (`prueba con valor = '-1'-> "false"-----> ${verifyinput('-1')}`,verifyinput('-1')); // false


console.log("prueba(s) de ejercicio 1 - version flecha")

const verifyinput2 = (value) => Number.isInteger(+value) && +value>0 && +value<201;

console.log (`prueba con valor = 'F'-> "false"-----> ${verifyinput2('F')}`, verifyinput('F')); // false is not a number
console.log (`prueba con valor = '1'-> "true"-----> ${verifyinput2('1')}`,verifyinput('1')); // true is in range
console.log (`prueba con valor = '200'-> "true"-----> ${verifyinput2('200')}`,verifyinput('200')); // true
console.log (`prueba con valor = '0'-> "false"-----> ${verifyinput2('0')}`,verifyinput('0')); // false 


