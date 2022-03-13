"use strict" //Correr javascript en modo estricto
const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = {...producto, ...medidas};
console.log(nuevoProducto);