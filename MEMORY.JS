/////// MEMORY (STACK(PRIMITIVE-CALL BY VALUE ) AND 
// HEAP(NON PRIMITIVE-CALL BY REFERENCE))
let myName ="A"
let AnotherName=myName
AnotherName="B"
console.log(myName);
console.log(AnotherName);
let userone = {     //call by reference HEAP
    email:"arsh@",
    name:"arsh",
}
let userTwo=userone
userTwo.email="arshj"//object accesed by .
console.log(userTwo.email);
console.log(userone.email);
//call by reference guves the location of value
//  not copy of value so the value changed