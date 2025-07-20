import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  
  let quien = ['Dayloc', 'Neff',];
  let accion = ['se decepciono', 'felicito', 'se ilusiono','se maravillo'];
  let que = ['de mi trabajo', 'de la comida colombniana','de la clase' ];
  let cuando = ['en la clase', 'en el baño', 'en la oficina', 'en casa', 'cuando rezaba'];
  
  function randomExcuse() {
  let quienEs = quien[Math.floor(Math.random() * quien.length)];
  let acciones = accion[Math.floor(Math.random() * accion.length)];
  let queEs = que[Math.floor(Math.random() * que.length)];
  let cuandoFue = cuando[Math.floor(Math.random() * cuando.length)];
 
  return `${quienEs} ${acciones} ${queEs} ${cuandoFue}`;
  
 
}
document.getElementById("excuse").innerHTML = randomExcuse ();
  
}
  
    


