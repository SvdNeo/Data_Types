// //if an object is stored in array/newMap and its defined as null then it wont be garbaged
// let obj = {name:"sanjay"}
// let arr = [obj]
// console.log(arr)
//  obj = null
//  console.log(arr)
//  console.log(obj)

// // in weakMap key value should be always a object
// const map = new WeakMap();
// map.set({a:"b"},"string")
// console.log(map)
// //map.set("set","number")
// console.log(map)

// let visitCount = new Map();
// function count(user){
//     let count = visitCount.get(user) || 0;
//     visitCount.set(user,count+1)
// }
// let john = {name:'john'}
// count(john)
// john  = null
// console.log(john)
// console.log(count(john))

// let visitCount1 = new WeakMap();
// function countVisit(user){
//     let count1 = visitCount1.get(user) || 0;
//     visitCount1.set(user,count1+1)
// }
// let user2 = {name:"sanjay"};
// countVisit(user2)
// //user2 = null;
// console.log(countVisit(user2))


// //task 1
// let messages = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
//   ];

//   let readMess = new WeakSet();
//   readMess.add(messages[0])
//   readMess.add(messages[1])
//   messages.shift()
//   console.log(messages)
//   console.log(readMess)

//   let messages1 = [
//     {text: "Hello", from: "John"},
//     {text: "How goes?", from: "John"},
//     {text: "See you soon", from: "Alice"}
//   ];
  
//   let readMap = new WeakMap();
  
//   readMap.set(messages1[0], new Date(2017, 1, 1));
//   console.log(readMap)


//   let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
//   let sal = {}
//   let salary = Object.values(sal).reduce((acc,val)=>acc+val,0)
//   console.log(salary)

// function sumSalaries(salaries){
//     let sum = 0;
//     for(let val of Object.values(salaries)){
//         sum+=val
//     }
//     return sum
// }
// console.log(sumSalaries(salaries))
//console.log(sumSalaries(sal))

let user4 = {
    name: 'John',
    age: 30
  };
  function count(user4){
    const arr = Object.keys(user4)
    return arr.length
  }
 console.log( count(user4))
 


