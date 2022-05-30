let game = prompt("Que videojuego desea? 1.FIFA 2.LOL 3.V RISING");

while(game != ""){
    switch(game.toUpperCase()){
        case "FIFA":
        let money = parseInt(prompt("Con cuanto dinero cuentas?"));
        if (money >= 20){
            console.log("Genial, lo puedes comprar");
            game ="";
        }else{
            let faltante = 20 - money ;
            console.log("Te falta " + faltante + " dolares");
            game ="";
        }
            break;
        case "LOL":
            console.log("Genial, es un juego free. Pincha aqui para descargar");
            game ="";
            break;    
        case "V RISING":
            let money2 = parseInt(prompt("Con cuanto dinero cuentas?"));
            if(money2 >= 5){
                console.log("Genial, lo puedes comprar");
                game ="";
            }else{
                let faltante = 5 - money ;
                console.log("Te falta " + faltante + " dolares");
                game ="";
            }
            break;        
    }
}