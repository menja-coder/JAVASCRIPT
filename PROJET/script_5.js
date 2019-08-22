const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

//Est-ce que tous les livres ont été au moins empruntés une fois ?


function rentedOne() {
  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
  for(let index in books) {

  if (books[index].rented>=1){
    var reponse="OUI";
  }
  else {
     reponse = "NON";
  break; 
  }
}
 console.log(`>>>>>>>> ${reponse} <<<<<<<`);
}



function maxRent(){
  console.log("Quel est livre le plus emprunté ?");
  var rent = [];
  for(var index in books){
    var a =books[index].rented;
    rent.push(a);
  }
  let maxi = Math.max(...rent);

  for(var indexe in books){
  if (books[indexe].rented === maxi) { 
    console.log(`>>>>>>>>>>>   ${books[indexe].title}  <<<<<<<<<<`);
  }
 } 
}

function findBookWithAnID(id){

  for(var index in books){
    var a =books[index].id;
    if (a === id) {
      console.log(`Le qui a pour id = ${id} est ${books[index].title}`);
    }
  }
}



function deleteBook(id){
  for(var index in books){
  var a = books[index].id;
    if (a === id) {
      books.splice(indexOf(books.findIndex(ligne=>ligne.id=id),1));
    }
  
}
}


