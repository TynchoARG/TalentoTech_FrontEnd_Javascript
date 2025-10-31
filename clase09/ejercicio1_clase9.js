let num1 = prompt("Ingrese el primer número: ");
let num2 = prompt("Ingrese el segundo número");

//Convierto las entradas en números decimales
num1 = parseFloat(num1);
num2 = parseFloat(num2);

/*Verifico si lo ingresado en un número
con el "!" delante de isNaN porque debe negar el resultado.
isNaN(valor) devuelve true si el valor no es un número.
Pero yo quiero saber si sí es un número válido, o sea lo contrario.*/

console.log("¿El primer dato es un número válido?: " + !isNaN(num1));
console.log("¿El segundo dato es un número válido?: " + !isNaN(num2));

//Muestro por consola los resultados
console.log("Estos son los resultados de las operaciones");
console.log("Suma: "+(num1+num2));
console.log("Resta: "+(num1-num2));
console.log("Multiplicación: "+(num1*num2));
console.log("División: "+(num1/num2));
console.log("Módulo: "+(num1%num2));

//Con getElementById puedo escribir dentro del HTML, inclusive podria usar las etiquetas.
document.getElementById("resultado").innerHTML =
    "Los números ingresados son el <strong>" + num1 + "</strong> y el <strong>" + num2 + "</strong><br><br>" +
    "¿El primer dato es un número válido?: " + !isNaN(num1) + "<br>" +
    "¿El segundo dato es un número válido?: " + !isNaN(num2) + "<br><br>" +
    "Estos son los resultados de las operaciones:<br>" +
    "<ul>"+
    "<li>Suma: " + (num1 + num2) + "</li>" +
    "<li>Resta: " + (num1 - num2) + "</li>" +
    "<li>Multiplicación: " + (num1 * num2) + "</li>" +
    "<li>División: " + (num1 / num2) + "</li>" +
    "<li>Módulo: " + (num1 % num2) + "</li>"+
    "</ul>";