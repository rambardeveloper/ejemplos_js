//funciones que retornan valores
function sumar(n1, n2){
    return n1 + n2;
}

const resultado = sumar(2, 3);

console.log(resultado);

let total = 0;

function agregarAlCarrito(monto){
    return total + monto;
}

function calcularImpuesto(){
    return total * 1.19;
}

total = agregarAlCarrito(200);
total = agregarAlCarrito(600);
const totalAPagar = calcularImpuesto();

console.log(`El total a pagar es ${totalAPagar}`);