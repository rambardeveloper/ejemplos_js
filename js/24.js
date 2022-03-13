//For loop

for (let index = 0; index < 10; index++) {
    console.log(index);
}

for (let index = 0; index < 100; index++) {
    if(index % 2 === 0){
        console.log(`El numero ${index} es par`);
    }else{
        console.log(`El numero ${index} es impar`);
    }
}

const carrito = [
    {nombre: 'Monitor de 20 pulgadas', precio: 500},
    {nombre: 'Televisor de 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 500},
    {nombre: 'Monitor de 40 pulgadas', precio: 200},

];


for (let index = 0; index < carrito.length; index++) {
    const element = carrito[index];
    console.log(element);
}
//While loop

let i = 0; //indice

while (i < 20) { //condicion
    

    i++; //iterador
}

//Do while 

let j = 0; //indice

do { //condicion
    

    j++; //iterador
}while(j < 20)