//JavaScript Date objects represent a single moment in time in a platform-independent format. 
// Date objects encapsulate an integral number that represents milliseconds since the midnight 
// at the beginning of January 1, 1970, UTC (the epoch).

let myDate= new Date()
console.log(myDate);//unusable shit
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());//gives in dd/mm/yyyy
console.log(myDate.toLocaleString());//gives in dd/mm/yyyy and the time
console.log(myDate.toTimeString());//in 24h and time std
console.log(typeof myDate);//obj

let CreatedDate = new Date(2023, 10, 19) // YYYY/MM/DD M-0->11
let createdDate = new Date(2023, 10, 19, 6, 3) // YYYY/MM/DD M-0->11
console.log(CreatedDate.toDateString());
let newDate= new Date("2023-01-12")
let NewDate= new Date("01-14-2023")

let myTimeStamp = Date.now()
console.log(myTimeStamp);//ms from 1 jan 1970
console.log(CreatedDate.getTime()); // gives ms from 1jan1970
console.log(Math.floor(Date.now()/1000))//to get s from ms /1000

let twoDate = new Date()
console.log(twoDate.getFullYear());
console.log(twoDate.getMonth()+1);
console.log(`${twoDate.getMonth()+1} is the current month`);

twoDate.toLocaleString('default', {
    weekday:"long",
 
})