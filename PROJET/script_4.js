const entrepreneurs = [
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

//entrepreneurs nées dans les années 70
 console.log("Liste des entrepreneurs qui sont nés dans les années 70: ");
for(let index in entrepreneurs) {
  if (entrepreneurs[index].year>=1970&&entrepreneurs[index].year<=1979)
 
  console.log(`${entrepreneurs[index].first}  ${entrepreneurs[index].last} => Année: ${entrepreneurs[index].year}`);}

//Array qui se retourne les noms et prénoms
var tab = [];
for(let index in entrepreneurs) {
  let obj ={first: entrepreneurs[index].first, last: entrepreneurs[index].last};
  tab.push(obj);}
console.log("Voici l'array des noms et prénoms:")
console.log(tab);


//âge actuel de chaque inventeur

for(let index in entrepreneurs) {
  let age = 2019-entrepreneurs[index].year;
  console.log(`${entrepreneurs[index].first} a ${age} ans`);
}
   tab = [];
for(let index in entrepreneurs) {

  var nom = entrepreneurs[index].last;
  tab.push(nom);
}
console.log(tab.sort());
 