let score = "33" //string
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
//string changed to number
//when score is mixedof numbers and letters then conversion
let score1 = "33a" //string
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);
//converted to number but returns NaN value (not a number ) type still number
let score2 = null //null->0
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);
//undefined - >NaN
let score3 = undefined
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);
// 1(number)->Boolean(1)->true
let score4 = ""//->>false
let valueInNumber4 =Boolean(score4)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);
//string (not empty) boolean->>true 
let score5 = 35
let valueInNumber5 =String(score5)
console.log(typeof valueInNumber5);
console.log(valueInNumber5);
