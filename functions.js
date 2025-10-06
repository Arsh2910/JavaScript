
function sayHello(){
console.log("h");
console.log("e");
console.log("l");
console.log("l");
console.log("o");
}
// sayHello() //sayHEllo refernece ()execution
// function addTwoNumbers(number1, number2){
//    console.log( number1 + number2);
// }
// const sum = addTwoNumbers(2,3)//shit as function gives console log
// //addTwoNumbers(2,"a") later
// console.log(sum);

function addTwoNumbers(number1, number2){
   //const result= number1 + number2
//return result
return number1 + number2
 console.log("yokoso"); // function after return somthing will not print any shiii
 } //result declaed in function isbdiff to outside
 const result = addTwoNumbers(3,5)
 console.log(result);
 

function logInUserMessage(username ){
    if(username === undefined){ //!username can also be used as by default undefined is false so this will execute){
        console.log("username to daal bhadwe");
        return//usin return here so that it doesnt execute the below state
    }
    return `${username} just logged in`
}
console.log(logInUserMessage("arsh")); // remeber this shi will ned to print as the function just return the msg
 console.log(logInUserMessage());//if we dont give any argumenr we get undefined
 
 ///to give a default value if user doesnt gives shii
 function logInUserMessage2(username ="sam"){
    if(username === undefined){ //!username can also be used as by default undefined is false so this will execute){
        console.log("username to daal bhadwe");
        return//usin return here so that it doesnt execute the below state
    }
    return `${username} just logged in`
}

//as in shoppiing cart wr dont know how many arguments (items price to be calculated)
function calaculateCartPrice(val1,val2 ,...num1){ //... here rest so multi value can be passed
      return num1
}
console.log(calaculateCartPrice(200, 300, 400)); //array
//val1=200,vla2=200

const user1 ={
    username:"batman",
    price:99
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user1) 
handleObject({
    username:"SAM",
    price:299
})

const NewArray = [200,400,222,234]
function Return2ndValue(getArray){
    return getArray[1]
}
console.log(Return2ndValue(NewArray));
