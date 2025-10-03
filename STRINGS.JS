const name="arsh"
const repocount= 50
//console.log( name + repocount +" value");//not recommemnd
console.log(`Heloo orewa ${name} and my repo count is ${repocount}`);
//string interpolation` `
const gameName= new String('GTA-V')//another way of declaring 
//makes string as an obj key valuue pairs
//g-0 t-1 a-2 v-3 length=4
console.log(gameName);
// Expected output: [String: 'GTA-V']

console.log(gameName.valueOf());
// Expected output: "GTA-V"

console.log(gameName[0]);
console.log(gameName.__proto__); //to access prototype
console.log(gameName.length); //to access length a.ka various function/methods
console.log(gameName.toLowerCase());

//doesnt chnage og value as string is primitive accesed through stack
console.log(gameName.charAt(2));
console.log(gameName.indexOf('V'));
const newString=gameName.substring(0,3) //doesnt includes 3
console.log(newString);

const anotherString = gameName.slice(-4,3)
console.log(anotherString);//prints TA as starts from -4 i.e V
// and ends at 3 (-)

const newString1= "  hitesh  "
console.log(newString1);
console.log(newString1.trim());//trims white spaces


const url = "https://arsh.com/arsh%20as"
console.log(url.replace('%20', '-'));
  
console.log(url.includes('ab'));

console.log(gameName.split('-'));//converts into array based on seprator

const strings = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
];

for (const str of strings) {
  console.log(str.toWellFormed());
}
// Logs:
// "ab�"
// "ab�c"
// "�ab"
// "c�ab"
// "abc"
// "ab😄c"
