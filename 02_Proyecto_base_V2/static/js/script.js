// Declaración de variables
var num = 18; //Menos segura
let anioNacimiento = 2008; //Tipo numérico
let numeroDecimal = 3.14; //Numérico parte decimal
let cadenaTexto = "Hola, mundo"; //String (Solo texto) 
let valorBooleano = true; //Valor SOLO verdadero/falso (1,0)
let arreglo = [1, 2, 3, ""]; //Array-Arreglo (Lista de elementos)
let objetoPersona = { nombre: "Ana", edad: 30 }; //Object - Diccionario
let valorIndefinid; //Undefined (Sin valor asignado)
let valorNulo = null; //Null (Valor nulo)
const mes = "Junio"; //Const-Constante (No varia)

// Funciones para mostrar cada valor con alert()
//Function-Función (Realiza una tarea en específico)
function mostrarAnioNacimiento() { 
    alert("Año de Nacimiento: " + anioNacimiento);
}

function mostrarNumeroDecimal() {
    alert("Número decimal: " + numeroDecimal);
}

function mostrarCadenaTexto() {
    alert("Cadena de texto: " + cadenaTexto);
}

function mostrarBooleano() {
    alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
    alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
    alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
    alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
    alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
    alert("Constante mes: " + mes);
}