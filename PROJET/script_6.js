console.log("On va voir les codes de  la vie ");

function inputArn(arn){

  let code = "";

  for (i = 0; i<arn.length; i++){

   code+= arn[i];

    if( i!==0 &&  i!== arn.length-1){

      if ((i+1)%3 === 0){

        code += "-";

      }

    }

  }

  return code;

}

function acideAmino(codon){

  if(codon === "UCU" || codon === "UCC" || codon === "UCA" || codon === "UCG" || codon === "AGU" || codon === "AGC"){

    return "Sérine";

  }

  else if(codon === "CCU" || codon === "CCC" || codon === "CCA" || codon === "CCG"){

    return "Proline";

  }

  else if(codon === "UUA" ||codon === "UUG"){

    return "Leucine";

  }

  else if(codon === "UUU" || codon === "UUC"){

    return "Phénylalanine";

  }

  else if(codon === "CGU" || codon === "CGC" || codon === "CGA" || codon === "CGG" || codon === "AGA" || codon === "AGG"){

    return "Arginine";

  }

  else if(codon === "UAU" || codon === "UAC"){

    return "Tyrosine";

  }

  else{

    return 0;

  }

}

let arn = "CCGUCGUUGCGCUACAGC";

let arn1 = "CCUCGCCGGUACUUCUCG";

let codons = [];

let arrayOfAcideAmino = [];
arn1 = inputArn(arn1);
codons = arn1.split("-");
for(let i=0;i<codons.length;i++){

  if (acideAmino(codons[i]) != 0){

    arrayOfAcideAmino.push(acideAmino(codons[i]));
  }
}

console.log(">>>>>>>>>L'arn à transcrire:<<<<<<<")

console.log(arn1);

console.log(">>>>>>>>Votre acides aminés après transcription : <<<<<<<<")

console.log(arrayOfAcideAmino);