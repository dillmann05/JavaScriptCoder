let anio= 2022
let mes = 2
let dia = 21


const calcularTuEdad = (diaNacimiento,mesNacimiento,anioNacimiento)=>{

	
	if(yaCumplioAnios(diaNacimiento,mesNacimiento,anioNacimiento)){

		return "Tu edad es " + (anio - anioNacimiento)
	
	}else if(cumpleanios(diaNacimiento,mesNacimiento,anioNacimiento)){

		return "Feliz cumpleaños, tenes " + (anio - anioNacimiento) + " años"
	}else{

		return "Tu edad es " + (anio - anioNacimiento - 1)
	}

	
}

const cumpleanios = (diaNacimiento,mesNacimiento)=>{

    if(diaNacimiento == dia && mesNacimiento == mes){

    	return true
    }else{

    	return false
    }

}

const yaCumplioAnios = (diaNacimiento,mesNacimiento)=>{

if(mesNacimiento < mes || (mesNacimiento == mes && diaNacimiento < dia)){

	return true
}else{

	return false
}

}

console.log(calcularTuEdad(01,12,1984))

