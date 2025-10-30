let nombre = prompt("Ingrese su nombre: ");
let correo = prompt("Ingrese su correo electrónico: ");
let mensaje = prompt("Ingrese el mensaje: ");

// Elimina espacios al principio y al final
nombre = nombre.trim();
correo = correo.trim();
mensaje = mensaje.trim();

// Validación del formato de correo, que tenga @ y al menos un punto
function validarCorreo(email) {
  return email.includes("@") && email.includes(".");
}

/* Validación de campos No Vacíos
En JavaScript, una cadena vacía ("") se evalúa como falso.
Entonces, if (nombre && correo && mensaje) significa:
“Si todas las variables tienen contenido (no están vacías ni null)…”
Si alguna está vacía, el else se ejecuta.
*/
if (nombre && correo && mensaje) {
  if (validarCorreo(correo)) {
    console.log("Formulario completo y correo válido. Listo para enviar ✅");
  } else {
    console.log("El correo electrónico no tiene un formato válido ❌");
  }
} else {
  console.log("Faltan completar campos obligatorios ❗");
}
