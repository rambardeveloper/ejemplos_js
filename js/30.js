//Promesas


//en las promesas existen 3 valores
//Pending: no ha respondido 
const usuarioAutenticado1 = new Promise((resolve, reject) => {
   
});

usuarioAutenticado1
.then((_success)=>{
    console.log(_success);
})
.catch((_error)=>{
    console.log(_error);
});

console.log(usuarioAutenticado1);
//Fulfilled: ya se cumplio
const usuarioAutenticado2 = new Promise((resolve, reject) => {
    const auth = true;
    if(auth){
        resolve('Usuario autenticado');//la promesa se cumple
    }else{
        reject('Usuario no autenticado');//la promesa no se cumple
    }
});

usuarioAutenticado2
.then((_success)=>{
    console.log(_success);
})
.catch((_error)=>{
    console.log(_error);
});


console.log(usuarioAutenticado2);
//rejected: se ha rechazado

const usuarioAutenticado3 = new Promise((resolve, reject) => {
    const auth = false;
    if(auth){
        resolve('Usuario autenticado');//la promesa se cumple
    }else{
        reject('Usuario no autenticado');//la promesa no se cumple
    }
});

usuarioAutenticado3
.then((_success)=>{
    console.log(_success);
})
.catch((_error)=>{
    console.log(_error);
});


console.log(usuarioAutenticado3);