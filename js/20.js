//Metodos de propiedad

const reproducir = {
    reproducir : function (_id) {
        console.log(`Reproduciendo canciones ${_id}`);
    },
    pausar: function (){
        console.log("Pausando");
    }
}

reproductor.borrarCancion = function(_id){
    console.log(`Eliminando cancion: ${id}`)
}


reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20)