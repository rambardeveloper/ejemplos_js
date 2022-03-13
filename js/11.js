// obtener valores de objetos

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300, 
    disponible: true
}

//forma anterior
const precioProducto = producto.precio;
const nombreProducto2 = producto.nombreProducto;

console.log(precioProducto);
console.log(nombreProducto2);

//Destructuring 
// const {precio} = producto;
// const {nombreProducto} =  producto;
const {precio, nombreProducto} = producto;


console.log(precio);

console.log(nombreProducto);