//llamado de varias promesas

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

function descargarNuevosProductos(){
    return new Promise(resolve => {
        console.log("Descargando productos... espere");
        setTimeout(() => {
            resolve('Los productos fueron descargados');
        }, 3000);
    });
}

async function app(){
    try {
        console.log("El resultado no se imprime hasta que se ejecute la promesa")
        const resultado = await Promise.all([
            descargarNuevosProductos(),
            descargarNuevosclientes()
        ]);
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}


app();
console.log("Este codigo no esta bloqueado por app.")