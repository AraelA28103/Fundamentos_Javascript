//Ejercicios Condiciones IF - ELSE
console.log("Conexion con JS establecida . . . ")

//Edad para votar
function edadParaVotar() {
    let edad = parseInt(prompt("Ingrese su edad: "));//Input string convertido en número ("parseInt()")
    if (edad >= 18) { //SI edad es mayor o igual a 18 mostrar "alert(...)"
        alert("Su edad " + edad + " está aprobada para votar");
    } else if (edad >= 0 && edad < 18) { //SI NO es la anterior edad es menor o igual a 0, y es menor a 18 mostrar alert(...)
        alert("Su edad " + edad + " no es aprobada para votar");
    } else { //SI NO SE CUMPLEN LAS ÚLTIMAS mostrar alert(...)
        alert("Valor no válido");
    }
}

//Contraseña válida
function contraseñaValida() {
    let password = parseInt(prompt("Ingresa la contraseña correcta: "));
    if (password == "1234") {
        alert("Contraseña correcta");
    } else (password < "1234" && password > "1234"); {
        alert("Contraseña incorrecta");
    }
}

//Verificar par o impar
function verificarParImpar() {
    let num = parseInt(prompt("Ingresa un número: "));
    if (num % 2 == 0) {
        alert("El número " + num + " es par");
    } else {
        alert("El número " + num + " es impar");
    }
}

//Temperatura ambiental
function temperaturaAmbiental() {
    let temp = parseInt(prompt("Ingresa la temperatura actual: "));
    if (temp >= 30) {
        alert("Hace calor");
    } else {
        alert("Clima agradable");
    }
}

//Comparar dos números
function compararNumeros() {
    let num1 = parseInt(prompt("Ingresa el primer número: "));
    let num2 = parseInt(prompt("Ingresa un segundo número: "));
    if (num1 > num2) {
        alert("El primer número " + num1 + " es mayor que el segundo número " + num2);
    } else if (num2 > num1) {
        alert("El segundo número " + num2 + " es mayor que el primer número " + num1);
    } else
        alert("Ambos números son iguales");
}

//Calificación escolar
function calificacionEscolar() {
    let nota = parseInt(prompt("Ingresa tu nota del 10 al 70: "));
    if (nota > 70) {
        alert("Nota no válida");
    } else if (nota >= 40) {
        alert("Aprobado!");
    } else if (nota < 10) {
        alert("Nota no válida");
    } else
        alert("Reprobado :(");
}

//Nombre de usuario válido
function nombreValido() {
    let nomb = prompt("Ingrese el nombre de usuario: ");
    let nombre = "Admin";
    if (nomb == nombre) {
        alert("Bienvenido, administrador");
    } else {
        alert("Usuario no reconocido");
    }
}

//Verificar si una palabra empieza con "A"
function palabraA() {
    let palabra = prompt("Ingresa una palabra: ");
    if (palabra[0] == "A") {
        alert("Su palabra " + palabra + ' empieza con "A"');
    } else {
        alert("Su palabra " + palabra + ' no empieza con "A"');
    }
}
//Precio con descuento
function precioDescuento() {
    let descuento = parseFloat(prompt("Ingrese el valor de descuento: "));
    descuento /= 100; // Operación para llevara a decimal
    let valorProducto = parseInt(prompt("Ingrese el precio del producto: "));
    if (valorProducto > 10000) {
        alert("Su producto aplica para el descuento");
    } else {
        alert("No aplica para el descuento");
    }
}
//Verificar si una persona puede conducir
function puedeConducir() {
    let edad = parseInt(prompt("Ingrese su edad: "));
    let licencia = prompt("¿Posee una licencia? ").toLocaleLowerCase();
    if (edad >= 18 && licencia == "si") {
        alert("Si, si puede conducir");
    } else {
        alert("No, no puede conducir");
    }
}

