//Async / await

function descargarNuevosclientes(){
    return new Promise(resolve => {
        console.log("Descargando clientes... espere");
        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

async function app(){
    try {
        console.log("El resultado no se imprime hasta que se ejecute la promesa")
        const resultado = await descargarNuevosclientes();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}

app();
console.log("Este codigo no esta bloqueado por app.")