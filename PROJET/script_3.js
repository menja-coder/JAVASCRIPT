

etage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyramid(etage){
	for(var i = 1; i <= etage; i++) {
		var blank = " "; //Former l'etage du pyramide(etage=nbre inséré par l'utilisateur)
	for (var j = 1; j <= (etage-i); j++) {
		blank += " "; //Compter le nombre d'espace vide pour chaque etage(obtenu par la relation "etage-i")
	}
	for (var k= 1; k <= i;k++) {
		blank += "#";  // Inserer le symbole qui forme le pyramide
	}
	console.log(blank);
}
}
pyramid(etage);
