let respuestaSospechoso = prompt("Cometiste el crimen?");

while(respuestaSospechoso != "salirDelWhile"){

		 switch(respuestaSospechoso.toUpperCase()){
			 
			case "NO":
				alert("Deci la verdad");
				respuestaSospechoso = prompt("Cometiste el crimen?");
				break;
			case "SI":
				alert("Liiiisssto a Canada");
				respuestaSospechoso = "salirDelWhile";
				break;
			default:
			    alert("no te creo,confesa!!");
				respuestaSospechoso = prompt("Cometiste el crimen?");
				break;
		 }

}

