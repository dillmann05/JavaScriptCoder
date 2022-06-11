class Pancho{
   
	constructor(pedido){
		this.pancho;
		this.tamanio = pedido.tamanio
		this.papas = pedido.papas
		this.aderezo1 = pedido.aderezo1
		this.aderezo2 = pedido.aderezo2;
	}


	entregarPancho(){

		if(this.tamanio.toUpperCase() == "SUPER"){
			
			this.pancho = "superpancho"

		}else{
			
			this.pancho = "pancho chico"
		}


		if(this.aderezo1 != "" && this.aderezo2 != "" ){
			
			return "Aqui tiene su " + this.pancho + " " + this.papas + " papas, condimentado con " + this.aderezo1 + " y " + this.aderezo2 
		
		}else if (this.aderezo1 != "" && this.aderezo2 == "") {

			return "Aqui tiene su " + this.pancho + " " + this.papas + " papas, " + " condimentado con " + this.aderezo1
		
		}else{

			return "Aqui tiene su " + this.pancho + " " + this.papas + " papas" 

		}
		
	}

	
}

let pancho = new Pancho({tamanio:"",papas:"",aderezo1:"",aderezo2:""})
pancho["tamanio"] = prompt("¿Qué tamaño de pancho queres?")
pancho.papas = prompt("¿Lo querés con o sin papas?")
pancho.aderezo1 = prompt("¿Qué aderezo querés agregar?")
if(pancho.aderezo1 !== ""){
	pancho.aderezo2 = prompt("¿Que otro aderezo querés agregar?")	
}


console.log(pancho.entregarPancho())






