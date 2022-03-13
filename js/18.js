//Delaracion funcion
function sumar(numero1, numero2) { //funcion con parametros
    console.log(numero1 + numero2);
}

sumar(10, 10); //se pasan los argumentos
sumar(20, 20);

//Expresion de la funcion
const sumar2 = function(n1, n2){
    console.log(n1 + n2);
}

sumar2(2, 3);

//IIFE
(function(){
    console.log("esta es una funcion que se llama a ella misma");   
});


//funcion con parametros por defecto
function sumar(numero1 = 1, numero2 = 3) { //funcion con parametros
    console.log(numero1 + numero2);
}

sumar(10); //se pasan los argumentos
sumar();
