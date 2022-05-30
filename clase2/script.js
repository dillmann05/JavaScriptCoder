let user = prompt("Ingrese su usuario");
let pass = prompt("Ingrese su contraseña");

for(i=0; i<2; i++){
    if(user.toUpperCase === "ENZOXD" && pass === "1234"){
        console.log("Login");
    }else{
        console.log("Incorrecto");
    }
}