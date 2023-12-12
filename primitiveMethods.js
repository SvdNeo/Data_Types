console.log(typeof new Number(0));

let Zero = new Number(0);
if(Zero){
    console.log("Zero is Truthy!?!")
}

let num = Number("123");
console.log(typeof num)

//task
let str = "Hello";

str.test = 5;

console.log(str.test);