// singleteon (a single created object) through constructor
//Object.create constructor
// object literals 
//objects  can be defined key and values
const mySym = Symbol("key1")
const JsUser = {
    name: "luffy" ,
    "full name": "Monkey.D.Luffy", //ts can't be accesed through . syntax
    age: 18 , 
    //mySym: "key1" not the way to add a sym as a key as ts be usin as a astring
    [mySym]: "mykey1", //ts the right way to add a symbol as a key inn a obj
    location : "westBlue",
    email: "onepiece.com",
    isLoggedIn : false , 
    lastLoginDays: ["Monday","Saturday"]
}
console.log(JsUser.email);//not recom
console.log(JsUser["email"]);// accesed as string as it is
console.log(JsUser["full name"]);//ts the reason we should use[]to access object
//to chanage something in a obj
JsUser.email = "onepiece.in"
//Object.freeze(JsUser)
//freeze to stop changin of value in obj
JsUser.isLoggedIn= true
console.log(JsUser);
//functions treated as variable
JsUser.greeting = function(){
console.log("hello JS user");
}
console.log(JsUser.greeting);//retruns refence of function

JsUser.greetingTwo = function(){
console.log(`hello JS user, ${this.name}`); //this to access js user
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())