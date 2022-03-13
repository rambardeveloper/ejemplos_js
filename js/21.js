//Arrow functions

const sumar = (n1, n2) => {
    console.log(n1 + n2);
}

sumar(5, 10);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo("Fisica");

const meses = Array("Febrero", "Marzo", "Abril", "Mayo");

const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 500},
    {nombre: 'Televisor de 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 500},
    {nombre: 'Monitor de 40 pulgadas', precio: 200},

];

//for each
meses.forEach(mes => {
    if( mes == 'Marzo'){
        console.log('Marzo si existe');
    }
});

//includess
let resultado = meses.includes('Marzo');
console.log(resultado);

//some (ideal para arreglos de objetos)
resultado = carrito.some(producto =>  producto.nombre === 'Audifonos');

//reduce (lara iterar elementos y sumar totales)
resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);

//filter
resultado = carrito.filter(producto => producto.nombre !== 'Audifonos');
console.log(resultado);
