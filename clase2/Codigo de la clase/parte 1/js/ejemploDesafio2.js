// - Función que calcula y devuelve el porcentaje de aumento de un producto  
//   desde un determinado año hasta otro 
// - Se le pasa como parametros el nombre del producto,el precio inicial y 
//   el precio final
// - La funcion llama a otra funcion que calcule el porcentaje
// - Finalmente devuelve un string que nos dice cuanto aumento el producto


const calcularInflacion = (nombreProducto,precioInicial,precioFinal) => {
        
	const porcentaje = calcularPorcentaje(precioInicial, precioFinal);
    
	return "El producto " + nombreProducto + " aumentó un " + porcentaje;
}


const calcularPorcentaje = (precioInicial,precioFinal) => {

		return Math.ceil((precioFinal*100)/precioInicial) + "% ";
		
}

const aumentoYerba = calcularInflacion("Yerba",7,192)

console.log( aumentoYerba )

const aumentoCoca = calcularInflacion("Coca",6,300)

console.log(aumentoCoca)


