//task-1
function camelize(str) {
  return str
    .split("-")
    .map((letter, index) =>
      index === 0 ? letter : letter[0].toUpperCase() + letter.slice(1)
    )
    .join("");
}
console.log(camelize("list-style-image"));

//filter range
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter((i) => i >= a && i <= b);
}
//console.log(filterRange(arr,1,4))

// filter in place
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
filterRangeInPlace(arr, 1, 4);
console.log(arr);

let arr2 = [5, 2, 1, -10, 8];
console.log(
  arr2.sort((a, b) => {
    return b - a;
  })
);

let arr3 = ["HTML", "JavaScript", "CSS"];
function copySorted() {
  return arr3.slice().sort();
}
let sorted = copySorted();
console.log(sorted);
console.log(arr3);

//extended calculator

function Calculator() {
    this.methods = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
    }
  
    this.calculate = function (str) {
      let split = str.split(' '); // Fix: Invoke split() method
      let a = +split[0];
      let operator = split[1];
      let b = +split[2];
      if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
      return this.methods[operator](a, b);
    }
  
    this.addMethod = function (name, func) {
      this.methods[name] = func;
    }
  }
  
let calc = new Calculator();
console.log(calc.calculate("2 + 3")); // Output: 5

// Adding multiplication and division operations
calc.addMethod('*', (a, b) => a * b);
calc.addMethod('/', (a, b) => a / b);

console.log(calc.calculate("4 * 5")); // Output: 20
console.log(calc.calculate("10 / 2")); // Output: 5


// accessing the name of users
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

// Using map to create an array of names
let names1 = users.map(user => user.name);// using map method
let names = [];
for(let i = 0;i<users.length;i++){names.push(users[i].name)}// using for loop


console.log(names1)
console.log(names);

// mapping to objects
let johnny = { name: "Johnny", surname: "Smith", id: 1 };
let peter = { name: "Peter", surname: "Hunt", id: 2 };
let march = { name: "March", surname: "Key", id: 3 };

let users1 = [ johnny, peter, march ];

let usersMapped = users1.map(i=>({
    fullName: `${i.name} ${i.surname}`,
    id: i.id
}))
console.log(usersMapped)

let john1 = { name: "John", age: 25 };
let peter1 = { name: "Pete", age: 30 };
let mary1 = { name: "Mary", age: 28 };

let users2 = [ peter1, john1, mary1 ];

function sortByAge(users2){
   users2.sort((a,b)=>a.age - b.age)
   return users2

}
console.log(sortByAge(users2))

//shuffled array
function shuffleArray(arr8){

    for(let i = arr8.length-1;i>0;i--){        
         let j = Math.floor(Math.random()*(i+1));
        [arr8[i],arr8[j]] = [arr8[j],arr8[i]];
    }
}
let arr8 = [1,2,3]
console.log(shuffleArray(arr8));
console.log(arr8)
