/** @type {HTMLInputElement} */
const searchInp = document.querySelector('#search');
/** @type {HTMLFormElement} */
const filterFrm = document.querySelector('#filter');



filterFrm.addEventListener('submit', (event) => {
 event.preventDefault();
 console.log(event);
});
 
searchInp.addEventListener('input', (event) => {
 const inputTarget = /** @type {HTMLInputElement} */ (event.target);
 console.log(inputTarget.value);
});
 

/** fetch('./posts,json') para obtener el JSON localmente */
fetch('./posts.json')
 .then((response) => response.json())
 .then((data) => {
   console.log (data);
 });
 
export {};
