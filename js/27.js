//POO

//object literal
const producto = { 
    nombre: 'tablet',
    precio: '500'
}

//object constructor
function Producto(_nombre, _precio){
    this.nombre = _nombre;
    this.precio = _precio;
}


//prototype 
//funciones que se usan en un objeto especifico
Producto.prototype.formatearProducto = function (){
    return`El producto ${this.nombre} tiene un precio de ${this.precio}`;
}

//object constructor
function Cliente(_nombre, _ciudad){
    this.nombre = _nombre;
    this.ciudad = _ciudad;
}


//prototype 
//funciones que se usan en un objeto especifico
Cliente.prototype.formatearCliente = function (){
    return`El cliente ${this.nombre} viven en  ${this.ciudad}`;
}

const producto2 = new Producto("Monitor curvo 10 pulgadas", 1000);

const producto3 = new Producto("Monitor curvo 10 pulgadas", 1000);

const cliente = new Cliente("Pedro", "Cucuta");

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(producto2.formatearProducto());
console.log(cliente.formatearCliente());