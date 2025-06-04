// Declaración de variables
let cuandoNaci = 2009; //Tipo numérico INT
let euler = 2.71828; //Numérico parte decimal FLOAT
let comidaChatarra = "Pizza, amburguesa, papas fritas"; //String (Solo texto)  
let estadoUsuario = false; //Valor SOLO verdadero/falso (1,0)
let coloresPrimarios = ["rojo", " azul", " amarillo"]; //Array-Arreglo (Lista de elementos)
let elMartin = { nombre: "Martín Rojas", edad: 17, altura: 1.76 }; //Object - Diccionario
let valorIndefinid; //Undefined (Sin valor asignado)
let conexion = null; //Null (Valor nulo)
const mes = "Junio"; //Const-Constante (No varia)

// Funciones para mostrar cada valor con alert()
//Function-Función (Realiza una tarea en específico)
function mostrarCuandoNací() {
    alert("Nací en el: " + cuandoNaci);
}

function mostrarNumeroDeEuler() {
    alert("Número de Euler: " + euler);
}

function mostrarComidaChatarra() {
    alert("Comida Chatarra: " + comidaChatarra);
}

function mostrarEstadoUsuario() {
    alert("Usuario activo? : " + estadoUsuario);
}

function mostrarColoresPrimarios() {
    alert("Colores primarios: " + coloresPrimarios);
}

function mostrarElMartin() {
    alert("El Martin: " + JSON.stringify(elMartin));
}

function mostrarIndefinido() {
    alert("Valor indefinido: " + valorIndefinido);
}

function mostrarConexion() {
    alert("Conexión: " + conexion);
}

function mostrarMesDeNacimiento() {
    alert("Mes de nacimiento: " + mes);
}