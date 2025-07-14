//Comparar la longitud de dos palabras
function longitudPalabras() {
    let palabra1 = prompt("Ingresa una primera palabra: ");
    let palabra2 = prompt("Ingresa una segunda palabra: ");
    let longitud1 = palabra1.length;
    let longitud2 = palabra2.length;
    if (longitud1 > longitud2) {
        alert("La primera palabra ingresada es mas larga que la segunda palabra ingresada");
    } else if (longitud2 > longitud1) {
        alert("La segunda palabra ingresada es mas larga que la segunda palabra ingresada");
    } else {
        alert("Tanto la primera como segunda palabra ingresada tienen igual longitud");
    }
}

//Validar correo electrónico
function correoValido() {
    let correo = prompt("Por favor, ingresa tu correo electrónico: ");
    if (correo.includes('@')) {
        alert("Correo válido");
    } else {
        alert("Correo invalido");
    }
}

//Verificar si un número es positivo o negativo
function numeroPosNeg() {
    let num = prompt("Ingrese un número: ");
    if (num > 0) {
        alert("El número " + num + " es positivo.");
    } else if (num < 0) {
        alert("El número " + num + " es negativo.");
    } else {
        alert("El número es cero");
    }
}

//Saludo personalizado según hora
function saludoPersonalizado() {
    let hora = prompt("Ingrese la hora actual (formato de 0 a 23): ");
    if (hora >= 0 && hora < 12) {
        alert("Buenos días");
    } else if (hora >= 12 && hora < 18) {
        alert("Buenas tardes");
    } else if (hora >= 18 && hora < 24) {
        alert("Buenas noches");
    } else {
        alert("Hora no válida, por favor ingrese hora de 0 - 23 hrs");
    }
}

//Verificar si una palabra contiene la letra "e"
function palabraE() {
    let palabraE = prompt("Por favor, ingrese una palabra: ");
    if (palabraE.toLowerCase().includes('e')) {
        alert("La palabra " + palabraE + ' contiene alguna letra "e" o "E"');
    } else {
        alert("La palabra " + palabraE + ' no contiene ninguna letra "e" o "E"');
    }
}
