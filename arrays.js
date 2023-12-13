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
