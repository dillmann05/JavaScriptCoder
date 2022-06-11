

// for (let i = 0; i <= 10; i++) {
//     console.log("Incrementando...")
//     console.log("En esta entrada i es igual a " + i);
// }

// for (let i = 10; i >= 0; i--) {
//     console.log("Decrementando...")
//     console.log("En esta entrada i es igual a " + i);
// }


let ingresarNumero = Number(prompt("Ingresar Numero"));

// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    if(i === 5 || i===7){
        continue;
    }
    let resultado = ingresarNumero * i ;
    console.log(ingresarNumero +" X "+ i +" = "+ resultado);
}






























// const numero = parseInt(prompt("ingrese un numero"));

// //Este es un for incrementando
// for(let i = 0; i <= 10; i++){
//     console.log("El valor de i es " +  i);
//     console.log("i x el numero ingresado es " + ( i * numero));
//     if(i === 5 || i === 3){
//         continue;
//     }
//     console.log("Hola soy el " + i)

// }

// // Este es un for decrementando
// for(let i = 10; i >= 0; i--){
//     console.log("El valor de i es " +  i);
//     console.log("i x el numero ingresado es " + ( i * numero));
//     if(i === 5 || i === 3){
//         continue;
//     }
//     console.log("Hola soy el " + i)

// }



































/*for(let i=0;i<=20;i++){
if(i==5){

    continue
}
if(i==10){
    
}
    console.log(i)
}
/*let numeroMultiplicado = parseInt(prompt("Ingrese numero a multiplicar"))

for(let i=0;i<=10;i++){
let multiplicacion = numeroMultiplicado*i
console.log(numeroMultiplicado + " x " + i + " es igual a "+ multiplicacion)

}


/*for(let i = 10;i >= 0;i--){
   
   console.log(i)

}
*/

/*
for (let i = 0; i <= 1500; i++) {
  

    if(i < 5){
        continue;
    }

    if(i == 9){

    	break
    }
     console.log(i);
 }


//esto es lo que hace este ciclo for
 console.log(5)
 console.log(6)
 console.log(7)
 console.log(8)*//*


for(let i=2;i<10;i++){

	for(let n=2; n<10;n++){

		console.log(i + "x" + g + " es igual a " + i*g)
	}
}

let numeroMultiplicado = 2

for(let i=0;i<=10;i++){

console.log(numeroMultiplicado + " x " + i + "es igual a "+ numeroMultiplicado*i)

}



for (let i = 1; i <= 20; i++) {
    // En cada repetición solicitamos un nombre.
    
    // Informamos el turno asignado usando el número de repetición (i).
  
    for (let i = 1; i <= 5; i++) {
        // En cada repetición solicitamos un nombre.
        let ingresarNombre = prompt("Ingresar nombre");
        // Informamos el turno asignado usando el número de repetición (i).
        alert(" Turno  N° "+i+" Nombre: "+ingresarNombre);
    }
    
*/ 
