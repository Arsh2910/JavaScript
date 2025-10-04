const score = 400 
console.log(score);

const balance = new Number(2000)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));//for after points value here 2 means .00

const gst = 323.945

console.log(gst.toPrecision(3));//round off other values

const hundreds=100000
console.log(hundreds.toLocaleString('en-IN')); //by default us std

//////// maths
console.log(Math);//by default obj=a library
console.log(Math.abs(-4)); //gives +ve value
console.log(Math.round(4.33));
console.log(Math.ceil(4.2));//gives largest near value int
console.log(Math.floor(4.2));//gives small near value int
console.log(Math.min(4,3,43,32));
console.log(Math.max(4,3,43,32));

//most used
console.log(Math.random());//always value b/w 0 and 1
console.log((Math.random()*10) +1);//+1 to avoid 0
console.log(Math.floor(Math.random()*10) +1);//+1 to avoid 0

const min=10
const max=20
//generic formula to create random no. form some ranege
console.log(Math.floor(Math.random() * (max-min +1)) +min);
