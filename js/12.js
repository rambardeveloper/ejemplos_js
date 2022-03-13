"use strict" //Correr javascript en modo estricto
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true
}

Object.freeze(producto); //no te permite hacer ningun cambio en el objeto ya creado

console.log(Object.isFrozen(producto));

// producto.imagen = "imagen.jpg";

console.log(producto);

const producto2 = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true
}

Object.seal(producto2); //no te permite agregar ni eliminar propiedades pero si manipular las ya existentes

console.log(Object.isSealed(producto2));

// producto.imagen = "imagen.jpg";

console.log(producto2);

