// Declaración de variables
let nombre = prompt("Ingrese su nombre: "); //Variable tipo texto
let apellido = prompt("Ingrese su apellido: "); //variable tipo texto

// Funciones para mostrar cada valor con alert()
function usarString() {
    let primeraLetra = nombre[0];
    let ultimaLetra = nombre[nombre.length - 1];
    alert("Primera letra es: " + primeraLetra + "\nÚltima letra es: " + ultimaLetra);
}

function apelido() {
    let segundaLetraApellido = apellido[1];
    let penultimaletraApellido = apellido[apellido.length - 2];
    alert("Segunda letra es: " + segundaLetraApellido + "\nPenúltima letra es: " + penultimaletraApellido)
}