const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 500},
    {nombre: 'Televisor de 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 500},
    {nombre: 'Monitor de 40 pulgadas', precio: 200},

];

const arreglo1 = carrito.forEach(producto => producto.nombre)
const arreglo2 = carrito.map(producto => producto.nombre)

console.log(arreglo1)
console.log(arreglo2)