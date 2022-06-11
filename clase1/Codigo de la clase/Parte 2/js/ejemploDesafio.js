let pelicula = prompt("¿Que pelicula desea ver?");
const ticket = "aquí está su ticket";

while (pelicula != "") {
  switch (pelicula.toUpperCase()) {
   
    case "DURO DE MATAR":
      const edad = prompt("Cuantos años tiene?");
      if (edad > 17) {
        alert(ticket);
        pelicula = "";
      } else {
        const bambi = prompt("No querés ver Bambi?");
        if (bambi.toUpperCase() != "SI") {
          alert("Lo sentimos, no hay una pelicula apropiada para su edad");
          pelicula = "";
        } else {
          alert(ticket);
          pelicula = "";
        }
      }
      break;
   
    case "BAMBI":
      alert(ticket);
      pelicula = "";
      break;
    
    default:
      alert("Esa pelicula no esta en cartelera");
      pelicula = prompt("¿Que pelicula desea ver?");
      break;
  }
}
