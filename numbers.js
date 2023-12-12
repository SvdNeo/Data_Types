console.log(123456..toString(36));// using (..) to apply a method onto a number here second dot implies to method

console.log((123456).toString(36));

console.log(Math.ceil(3.4));// it rounds of to upper limit
console.log(Math.floor(3.4));// it rounds of to lower limit
console.log(Math.round(3.4));// it returns logical output
let round  = 3.145;
console.log(+round.toFixed(2));// toFixed method returns a string hence it can be converted to number by using unary operator(+)
console.log( isNaN(NaN) ); // true
console.log( isNaN("str") );//true
console.log(NaN === NaN);//false
console.log( Number.isNaN("str") )

//task1

let a = +prompt("Enter the first number")
let b = +prompt("Enter the second number")
let c = a+b
alert(c) 

