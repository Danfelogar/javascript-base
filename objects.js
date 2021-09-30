var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};
//this= hace referencia a su padre en este caso a "miAuto"
