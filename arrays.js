let fruits = ["apple","grapes","guava"];
console.log(fruits[0]);// accessing the arrays
fruits[2] = "Orange";// replacing the elements
console.log(fruits);
fruits[3] = "Water-Melon";// adding the elements
console.log(fruits);
console.log(fruits.length);

let arr = ["Steeve",{class:"Sixth"},[4,5,6],true,9,null,function() { console.log('Hello!'); }]; // mixed array
console.log(arr[1].class);
console.log(arr[2][0]);
console.log(arr[3]);
console.log(typeof arr[5]);
arr[6]()

// arrays are objects but in a more organized manner
let fruits2 = [];
fruits2[99999] = 5;
fruits2[2] = {}; // Create an object at index 0
fruits2[2].age = 25;
fruits2[0] = "apple"
console.log(fruits2);

//arrays are pass by reference  as they are objects(non primitive)

let arr2  = ["one"];
let arr3 = arr2;
console.log(arr3);
arr3[1] = "Two";
console.log(arr2);

//traversing through loops
let fruits3 = ["Apple", "Orange", "Plum",{1:"grapes"}];

// iterates over array elements
for (let fruit of fruits3) {
    let y = fruit
  console.log( y);
}

// multidimensional arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(matrix[0][2])

  //task 1
  let fruits4 = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits4;
shoppingCart.push("Banana");

// what's in fruits?
//alert( fruits4.length ); // 4

// task 2
let styles = ["jazz","blues"];
styles.push ("Rock-n-Roll");
console.log(styles)
styles[Math.floor(styles.length-1)/2] = "Classics";
console.log(styles)
styles.shift()
console.log(styles)
styles.unshift("Rap", "Reggae");
console.log(styles)

//task 3

// let arr4 = ["a", "b"];

// arr4.push(function() {
//   alert( this );
// })

// arr4[2](); // here this line invokes the function which is being pushed into the arr4 therefore "this" keyword will refer to the arr4 hence the output will be [ "a", "b", function() { alert( this ); } ]

// function sumInput(){
//     let num = [];
//     while(true){
//         let input = prompt("Enter a number")
//         if(input === null){
//             break;
//         }
//         let number = parseFloat(input)
//         if(!isNaN(number)){
//             num.push(number)
//         }
//     }
//     return num.reduce((a,b)=>{return a+b},0)

// }

// let res = sumInput();
// alert(res)

//Kadane algorithm
function getMaxSubSum(arr) {
let currentMax = 0;
let globalMax = Number.MIN_VALUE;
for(let i=0;i<arr.length;i++){
    currentMax = currentMax+arr[i]
    if(currentMax<arr[i]){
        currentMax=arr[i]
    }
    if(globalMax<currentMax){
        globalMax=currentMax
    }
    
}

return globalMax;
}
console.log(getMaxSubSum([1, -2, 3, 4, -9, 6]));


// splice and slice 
let array = [1,2,3,4,5,6]
let array2 = array.splice(1,2,7,8);
console.log(array)//  in splice original array is changed to [ 1, 7, 8, 4, 5, 6 ] whereas spliced array consist of deleted elements
console.log(array2)
let array3 = array.slice(2,4)
console.log(array)
console.log(array3)// in slice original array remains unchanged where as sliced array consist of sliced elements

//concat
let arr5 = [8,9,"fun",()=>{}];
let obj = {
    name:"svd",
    company:"NEOITO"
}
const content = arr5.concat(obj)
console.log(content);

let arr6 = [1, 2];

let arrayLike = {
  0: "something",
  1: "else",
  [Symbol.isConcatSpreadable]: true,
  length: 2
};

console.log( arr6.concat(arrayLike) )//  if object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat: its elements are added instead:

let Universe = ["Spidey","Iron-Man","Hulk"];
Universe.forEach((item,index,array)=>{
console.log(`The Avenger ${item} at index ${index} belongs to ${array}`)
})


