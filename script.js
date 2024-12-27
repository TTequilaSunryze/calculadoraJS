// esto agrega el valor a la pantalla
function agregar(valor) {
    let pantalla = document.getElementById("pantalla");
    pantalla.value += valor;
  }
  
// esto borra el valor de la pantalla
function borrar() {
    let pantalla = document.getElementById("pantalla");
    pantalla.value = "";
}
// Esta funcion calcula el resultado de la pantalla
function calcular() {
    let pantalla = document.getElementById("pantalla");
    let resultado = eval(pantalla.value);
    pantalla.value = resultado;
  }