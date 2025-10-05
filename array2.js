const marvelHeroes = ["loki", "wanda",  "spidey"]
const dcHeroes = [ "batman", "flash", "robin"]

//marvelHeroes.push(dcHeroes)
//inserts whole array at the last as a element rather than individaul ele
//console.log(marvelHeroes);
//console.log(marvelHeroes[3][1]);
// not recom 
//concact adds array and gives them to a another array unlike push
const allheroes = marvelHeroes.concat(dcHeroes) //new array should be somwehere
console.log(allheroes);
///spread to add arrays ele
const heroes = [...marvelHeroes, ...dcHeroes]
console.log(heroes);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

//flat spreasds out array inside array ele i.e flattens them
const realAnotherArray = anotherArray.flat(Infinity) // can give the depth as no.
console.log(realAnotherArray);

console.log(Array.isArray("arsh"));
console.log(Array.from("arsh")); //to convert into array
console.log(Array.from({name: "arsh"})); //gives empty array as we nee dto define

let score1 = 100
let score2 = 200
let score3 = 300
 
//of to make array of multiple values
console.log(Array.of(score1, score2, score3));
