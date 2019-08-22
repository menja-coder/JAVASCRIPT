

function factoriel(num){
	
		var prod = 1;
		for(var i=1; i<=num-1; i++)
			prod *= (num-i);
			let fac = prod*num;
		return fac;
}
 number = prompt("De quel nombre veut tu calculer la factorielle ?")
 console.log(`>> Voici le resultat: ${number}! = ${factoriel(number)}`);