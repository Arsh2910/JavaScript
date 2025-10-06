//const YTUser = new Object()
const YTUser = {} //non singleton
YTUser.id = "124ab"
YTUser,name ="L"
YTUser.isloggedIN = false

console.log(YTUser);
  
const regularUser = {
    email:"a@gmail.com",
    fullName:{
        userFullName :{
            firstName :"sam",
            lastName :"alt"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3={ obj1 , obj2}  not the right creates nesting of obj
// less used const obj3 = Object.assign( {},obj1,obj2) //{} not req but reccommeend {} act as target adn other as source
const obj3= {...obj1,...obj2} // spread
console.log(obj3);

//when value from database array of objects

const user =[
    {
        id:1,
        email:"Abb.com"
    },
    {
        id:2,
        email:"Abb2.com"
    }
]
console.log(user[0].email);
console.log(Object.keys(YTUser)); // gives all keys in a array
console.log(Object.values(YTUser));
console.log(Object.entries(YTUser));//every pair as a array

console.log(YTUser.hasOwnProperty('isloggedIN'));
// destructuring obj
const course  = {
    corusename:"courseA",
    price:999,
    courseInstructor:"Batman"
}

const {courseInstructor : instructor}= course
console.log(instructor);


//API->JSON
//{                     
  //   "corusename"":"courseA",
    //"price":999,
    //"courseInstructor"":"Batman"
//}
//[
//{},
//{},
//{}]