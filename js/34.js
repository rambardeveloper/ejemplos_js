//con promesas
function obtenerEmpleados(){
    const url = "js/empleados.json"

    fetch(url).then(_success=>{
        console.log(_success);
        return _success.json();
    })
    .then(_res =>{
        console.log(_res);
        const { empleados } = _res;
        console.log(empleados);
        empleados.array.forEach(_empleado => {
                console.log(`El empleado ${empleado.nombre} tiene un id ${empleado.id}`)
        });
    })
    .catch(_error=> {  
        console.log(_error);    
    }); 
}

//con async / await
async function obtenerEmpleados2(){
    const url = "js/empleados.json"

    const resultado = await fetch(url);
    const data = await resultado.json();
    console.log(data);

}

obtenerEmpleados();
obtenerEmpleados2();