class Celular{
    constructor(objeto){
        this.marca = objeto.marca;
        this.modelo = objeto.modelo;
        this.precio = objeto.precio;
        this.vendido= objeto.vendido;
    }

   vender(){
        
      this.vendido = true
   } 

   devolver(){
       this.vendido = false
   }

};

class Celular2{
    constructor(marca,modelo,precio,vendido){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.vendido= vendido;
    }

   vender(){
        
      this.vendido = true
   } 

   devolver(){
       this.vendido = false
   }

};

const celularUno = { precio:2300, marca: "Samsung", modelo: "A23",  vendido:false }
const celularDos = new Celular(celularUno);
const celularTres = new Celular2("Samsung","A23",2300,false)
celularDos.vender()
celularDos.devolver()
console.log(celularDos)

