//Arreglos o Arrays

const numeros = [10, 20, 30, 40];

console.log(numeros);
console.table(numeros);

const meses = Array("Febrero", "Marzo");
console.log(meses);
console.table(meses);

//En javascript se permiten arreglos de distintos tipos de datods

const array = ["bla", 30, true, {numero:1, letra:'a'}, [1, 2, 3]];
console.log(array);
console.table(array);

//acceder a los valores de un arreglo
console.log(array[1]);

//conocer la extension de un arreglooo
console.log(array.length);

//recorrer arreglo con un iterador
meses.forEach(function(mes){
    console.log(mes)
})

// agregar elementos al final del array

meses.push("Abril");
meses.push("Mayo", "Junio");
meses.forEach(function(mes){
    console.log(mes)
})

// agregar elementos al inicio del array
meses.unshift("Enero");
console.table(meses);

//elimina elementos al final 
meses.pop();
console.table(meses);

//elimina elementos al inicio
meses.shift();
console.table(meses);


//elimina elementos segun el indice 
meses.splice(1, 1); //indice, numero de eleentos
console.table(meses);

//agregar elemento al final sin alterar array original

let nuevoArray = [...meses, "Julio"]
console.log(nuevoArray);


//agregar elemento al inicio sin alterar array original

nuevoArray = [ "Julio", ...meses]
console.log(nuevoArray);
