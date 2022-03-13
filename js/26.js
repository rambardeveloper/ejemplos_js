//this
//con function
const reservacion = {
    nombre: "Juan",
    apellido: "De la torre",
    total: 5000,
    pagado: false,
    informacion: function(){ 
        console.log(`El cliente ${this.nombre} ${this.apellido} reservó y su cantidad a pagar es: ${this.total}`)
    }
} 

//con arrow function no funciona
const reservacion2 = {
    nombre: "Juan",
    apellido: "De la torre",
    total: 5000,
    pagado: false,
    informacion: () => console.log(`El cliente ${this.nombre} ${this.apellido} reservó y su cantidad a pagar es: ${this.total}`)
} 


reservacion.informacion();
reservacion2.informacion();