//Clases

class Producto {
    constructor(_nombre, _precio){
        this.nombre = _nombre;
        this.precio = _precio;
    }

    formatearProducto() {
        return`El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }

    getPrecio(){
        return `${this.precio}`;
    }

}


const producto2 = new Producto("Monitor curvo 10 pulgadas", 1000);

const producto3 = new Producto("Monitor curvo 19 pulgadas", 2000);

console.log(producto2);
console.log(producto3);
console.log(producto2.formatearProducto());
console.log(producto2.getPrecio());

//Herencia

class Libro extends Producto {
    constructor(_nombre, _precio, _isbn){
        super(_nombre, _precio);
        this.isbn = _isbn;
    }

    formatearLibro() {
        return `${super.formatearProducto()} y un isbn ${this.isbn}`;
    }
}

const libro = new Libro("Algebra de baldor", "200", "12312");
console.log(libro);
console.log(libro.formatearProducto());
console.log(libro.formatearLibro());