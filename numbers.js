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

// let a = +prompt("Enter the first number")
// let b = +prompt("Enter the second number")
// let c = a+b
//alert(c) 

//task 2
console.log(+6.35.toFixed(1))// here we get 6.3 as toFixed method rounds of 0.05 to 0 rather than 0.1
console.log(Math.round(6.35*10)/10)// here we get 6.4 (6.35*10 =63.5) math.round of 63.5 is 64 and 64/10 is 6.4


//function to read a number
function readNumber() {
    let num;
    do {
        num = prompt("Enter a number");
    } while (isNaN(num) || num === "");

    if (num === null) {
        return null;
    } else {
        return +num;
    }
}

alert(readNumber());


function readNumber1() {
    let numInput = document.getElementById("numberInput").value;

    // Check if the entered value is not empty and is a finite number
    if (numInput !== "" && isFinite(numInput)) {
      return +numInput; // Convert the input to a number and return
    } else {
      return null; // Return null for invalid input
    }
  }

  function handleInput() {
    let result = readNumber1();

    if (result !== null) {
      alert("You entered a valid number: " + result);
    } else {
      alert("Invalid input. Please enter a valid number.");
    }
  }

  //Write the function random(min, max) to generate a random floating-point number from min to max (not including max).
  function random(min,max){
let h = Math.random*(max-min)+min
return h
  }
  random(1,5)