//Creo el array de elementos
const productos = ["Remera", "Pantalón", "Gorra", "Medias", "Zapatillas", "Anteojos"];

//Agrego un contador
let contador = 0;

for (let i = 0; i < productos.length; i++) {
    alert("Producto " + (i + 1) + ": " + productos[i]);
  contador++;
}

// Al finalizar, mostramos un mensaje en la consola
console.log("Lista de productos mostrada correctamente.");
console.log("Cantidad de productos mostrados: " + contador);

/*
Otra forma seria con un For...of :

for (const producto of productos) {
  contador++;
  alert("Producto " + contador + ": " + producto);
}
  
*/