let nombre = prompt("Ingrese su nombre: ");
let edad = prompt("Ingrese su edad: ");

// Convierto la edad a un número entero
edad = parseInt(edad);

// Valido si la edad es un número o no
if (isNaN(edad)) {
    console.log("La edad ingresada no es válida.");
} else {
    // Si es válida, muestro los datos y evalúo la edad
    console.log("Hola " + nombre + ". Puedo ver que tenés " + edad + " años.");

    if (edad >= 18) {
        console.log("Entonces sos mayor de edad.");
    } else {
        console.log("Por lo tanto no sos mayor de edad.");
    }
}

/*Una version simplificada del IF seria:
let resultado = edad >= 18 ? "Entonces sos mayor de edad" : "Por lo tanto no sos mayor de edad.";
*/