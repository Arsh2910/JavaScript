
{}//scope when conditional statement and functionn

if(true){
let a = 10
const b = 20
var c = 30 //if dont use var still it will be shit and get out of its block scope
}//scope till this

//console.log(a); both returnin error as they should
//console.log(b);
//console.log(c); //this var shit doesnt no scope and gets outside of its declaration scope
//scope is diff in code envirinment and browser

function one (){
    const username = "Ash"

    function two(){
        const website = "yt"
        console.log(username);
    }
   // console.log(website)//will not execute as website is declared in a diff func{}
        two()//can access username as it is deffined above(out,parent) its function

}
one()
if (true){
    const username= "shanks"
    if (username==="shanks"){
        const website = "yt"
        console.log(username+website);
    }
    //console.log(website);
    
}
//console.log(username);
   

/////////////interesting.///////////
console.log(addone(5));
 
function addone(num){
    return num +1
}



const addTwo = function(num) { // expression
    return num+2
}
addTwo(5)