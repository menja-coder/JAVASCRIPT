


const entrepreneurs =[


  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];


console.log("Liste des entrepreneurs :");


for(let index in entrepreneurs)
{

  if (entrepreneurs[index].year >1969 &&  entrepreneurs[index].year < 1980)
   {

     console.log(entrepreneurs[index].first +" : " +entrepreneurs[index].year);
  }

 }


 console.log("Liste des noms et prénoms des entrepreneurs :");


 for(let index in entrepreneurs)
 {

      console.log(entrepreneurs[index].first +" "+ entrepreneurs[index].last);

  }


  console.log("Age des entrepreneurs à nos jour ");
  for(let index in entrepreneurs)

  {

     let année = 2019 - entrepreneurs[index].year;

    console.log(entrepreneurs[index].last +" a "+année+"ans");

  }

console.log("(EN MODE TABLEAU)  Liste des noms et prénoms des entrepreneurs :" );
  var tab = [];
  for(let index in entrepreneurs)
  {


      let object = {nom: entrepreneurs[index].first, prenom: entrepreneurs[index].last };

    tab.push(object);

}
console.log(tab);





console.log(" (EN ALPHABETIQUE)  Liste des noms et prénoms des entrepreneurs :");


var tabl = [];
for(let index in entrepreneurs)
{

    let object = entrepreneurs[index].first;

  tabl.push(object);
}
console.log(tabl.sort());
