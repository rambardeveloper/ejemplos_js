//String o cadenas de texto
const producto = 'Monitor 20 Pulgadas';
const producto2 = String('Monitor de 30 Pulgadas');
const producto3 = new String('Monitor de 30 Pulgadas');

//usar comillas doble dentro de la cadena de caracteres
const producto4 = 'Monitor 20 \'\'';

console.log(producto);
console.log(producto2);
console.log(producto3);
console.log(producto4);

//ver la extension de un string 
console.log(producto.length);   

//ver si una palabra existe en una caden de texto (retorna posicion  o -1 si no la encuentra )
const word = "Esta es una frase random porque si";
console.log(word.indexOf("random"));

//ver si una palabra existe en una caden de texto (retorna posicion  o -1 si no la encuentra )
const word2 = "Esta es una frase random porque si";
console.log(word2.includes("random"));