'use strict';

//controls
const form = document.querySelector('#inputform');
const expresionIn = document.querySelector('#expresion');
const outputParagraph = document.querySelector('#resultout');

// on/off

// functions

/*
ejemplo entrada ="  - 23.5 -  4 "->salida ="-27.5"
 
otros casos

 empty -> 0
 spaces -> 0
 -1 -> -1
 + 1 --> 1
 1 -> 1
 -1 + 1 ->0

*/

/**
 * @param {String} mathexpresion - add or substract mathematical expresion like a string
 * @returns {Number} returns a number or "NaN" if invalid mathematical expresion
 */

function operaSimple(mathexpresion) {
  let fakeresult = 19.99;
  let result = fakeresult;
  console.log(mathexpresion);
  // NaN as result will be managed as 'expresion invalida' by manager in listener
  return result;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('clicked calcula!');
  let mathexpresionfake ='  - 23.5 -  4 '
  let mathexpresion = mathexpresionfake;
  console.log('la expresion',mathexpresion);
  
  let result = operaSimple(mathexpresion);
  console.log ('en el retorno de la funcion',result);
  
  outputParagraph.style.display = 'block';
  outputParagraph.textContent = String(result);
});























/**
 * funtion identifyoperands(inputstring)
 * 1.- Adjust the input string expresion 
 *     removing all the spaces
 * 2.- Identify last "minus (-)" or last "plus(+)"
 *     and the operator (-) or (+)
 * 3.- Identify where to split the string expresion
 * 4.- Split the string to get operator1 and operator2
 * 
 * @param {string} mathexpresion
 * @returns {number, number, booleam}
 */

/**
 * funtion operate(number1, number2, operation)
 * @param {number, number, booleam}
 * @returns {string} resultado
 */

/**
 * funtion operaSimple(string)
 * 1.- Adjust the input string expresion 
 *     removing all the spaces
 * 2.- Identify last "minus (-)" or last "plus(+)"
 *     and the operator (-) or (+)
 * 3.- Identify where to split the string expresion
 * 4.- Split the string to get operator1 and operator2
 * 5.- Perform the operation
 * 6.- Return result or failure(NaN)
 * 
 * 
 * @param {string} mathexpresion
 * @returns {string} resultado
 */
