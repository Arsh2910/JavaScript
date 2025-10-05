//arrays
//arrays are resizable 
//when copy array shallow copy are made share same reference
//means when copy is changed og also changes
const myArr = [ 0, 1, 2, 3, 4, 5]// can have similiar data types and unsimiliar also
const heroes = ["luffy", "akainu"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// ARRAY METHODS
myArr.push(6)
myArr.push(7) // push adds to last ele
myArr.pop()//removes the last ele
myArr.shift()// removes first ele
myArr.unshift(9)//adds ele to first posi and shift every shit
console.log(myArr);
console.log(myArr);
console.log(myArr.includes(4));
console.log(myArr.indexOf(10));//doesnt exist so gives -1
const newArr = myArr.join()//converts to string
console.log(myArr);
console.log(newArr);

//splice(manipulates the og array and removes the spliced part )
//  slice (doesnt do shit like splice just gives a copy of the given range)
console.log("A",myArr);
const myn1 = myArr.slice(1,3)//INDEX LAST RANGE NOT INCLUDED

console.log(myn1);
console.log("B",myArr);//slice operation perfomed

const myn2 = myArr.splice(1,3)//last range include
console.log("C",myArr);//splice operation performed
console.log(myn2);
