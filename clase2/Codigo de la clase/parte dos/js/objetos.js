// const celularUno = { precio:2300, marca: "Samsung", modelo: "A23",  vendido:false };
// const personaUno = { nombre:"Fede", apellido:"Fabrini", edad:37, hinchaDeRacing:true };

// console.log(celularUno.marca)
// console.log(personaUno.edad)

// celularUno.marca = "Iphone";
// celularUno.color = "blanco";

// console.log("Mi nombre es " + personaUno['apellido'] + " y tengo un celular " + celularUno.marca + " " + celularUno.modelo )

function Celular(precio,marca,modelo,vendido){

    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.vendido= vendido;
    this.vender = () => this.vendido = true

};

const celularDos = new Celular(123000,"Iphone","13",false);

// celularDos.vender();
// console.log( "precio" in celularDos);


const celularUno = { precio:2300, marca: "Samsung", modelo: "A23",  vendido:false };

for (const propiedad  in celularUno) {
    console.log(celularUno[propiedad]);
}

console.log(celularUno["precio"]);
console.log(celularUno["marca"]);
console.log(celularUno["modelo"]);
console.log(celularUno["vendido"]);










 
