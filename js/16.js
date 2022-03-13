//Delaracion funcion
function sumar() {
    console.log(10 * 10);
}

sumar();

//Expresion de la funcion
const sumar2 = function*(){
    console.log(20 + 20);
}

sumar2();

//IIFE
(function(){
    console.log("esta es una funcion que se llama a ella misma");   
});