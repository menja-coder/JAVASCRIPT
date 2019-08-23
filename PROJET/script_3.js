etage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyramid(etage){
	for(var i = 1; i <= etage; i++) {
		var row = " ";
	for (var j = 1; j <= (etage-i); j++) {
		row += " ";
	}
	for (var k= 1; k <= i;k++) {
		row += "#";
	}
	console.log(row);
}
}
pyramid(etage);
