/**
 * Variable de demo
 * @type {string}
 */
let nombre;

/**
 * The counter
 * @type {number}
 */
let counter;

/**
 * Inits the counter to zero
 */
function initCounter(){
    counter = 0;
}

/**
 * Increments the counter
 */
function incrementCounter(){
    counter++;
}

/**
 * Gets the counter
 * @returns {number}
 */
function getCounter(){
    return counter;
}


export { initCounter, incrementCounter, getCounter };

nombre