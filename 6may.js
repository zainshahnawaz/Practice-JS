//VAR Allow Redeclaration and reassign
/*console.log("Practice for let var and const");
var a = 1
var b = 2
var c = 3
var d = 4 
console.log(a)
console.log(b)
console.log(c) 
console.log(d) 
var a=6
var b=7
console.log(a)
console.log(b)

//CONST Once assigned its value cant be changed 
const a = 1
const b = 2
const c = 3
const d = 4 
console.log(a)
console.log(b)
console.log(c) 
console.log(d) 
//let a=2 an error occur

//LET Allow reassign but not redeclare in same scope
let a = 1
let b = 2
let c = 3
let d = 4 
/*{
    let a=3
    console.log (a);
}*/
/*console.log(a)
console.log(b)
console.log(c) 
console.log(d) */

/*Function
let a=1
let b=2
function Sum(a,b) {
    return(a+b)
}
console.log(Sum(a,b));

//Arrow Function
const Sum =(a,b)=>{
   return (a+b)
}
console.log(Sum(2,4));*/

// Pass by reference
// "How can you use a function passed as an argument to another function to update the values of variables a and b to 4 and 5 respectively?"
/*let a = 2
let b = 3
const function1 = (updatebyref) => {
    return updatebyref(10, 15)
}
const function2 = (new1, new2) => {
    a = new1;
    b = new2;
}
function1(function2)
console.log("updated values of a & b are " + a, b)*/
  
let a=3
let b=6
const function1=(Updatedbyreference)=>{
    return Updatedbyreference(45,65)
}
const function2=(new1,new2)=>{
    a=new1;
    b=new2;
}
function1(function2)
console.log(a,b);