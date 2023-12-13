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
