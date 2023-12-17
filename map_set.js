let map = new Map();
map.set("1","str1");
map.set(1,"num");
map.set(true,"bol1")
map.set({name:"sanjay",id:"1"},"nameObj").set([2,3,4,5,"fruits"],{numbers:"continuous"})// setting multiple values and keys as object/array
console.log(map)
console.log(map.get(1))
console.log(map.get("1"))
let team = {name:"India",sports:"cricket"}
map.set(team,"We Won");
console.log(map)
console.log(map.get(team))
map["null"] = "Any value can be added as key";
console.log(map);
console.log(map.delete("1"));
console.log(map);
console.log(map.has(team));

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  for(let key of recipeMap.keys()){
    console.log(key)
  }
  for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
  }
  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
  }
  recipeMap.forEach((value,key)=>{
    console.log(`${key}:${value}`)
  })

  let obj = {
    name: "John",
    age: 30,
    place:"Kerala",
    callName: function(){
      console.log(this.name)
    }
  };
  let mappedObj = new Map(Object.entries(obj))
  console.log(mappedObj.get('place'))

  let mapped = new Map();
  mapped.set(1,"udupi");
  mapped.set(2,"Mantrlaya");
  mapped.set(3,"Tirumala")

  let obj3 = Object.fromEntries(mapped.entries())
  console.log(obj3)
 console.log(Object.keys(obj3))
 console.log(Object.getOwnPropertyDescriptors(obj3))
 console.log(Object.getOwnPropertyDescriptor(obj3))
 console.log(Object.is(obj,obj3))
 

 let object1 = {
  user: "Sanjay",
  age: 35,
 
};
 let getName = function (state,country) {
    console.log(`${this.user} belongs to ${state} state of  ${country} `);
  }

let object2 = {
  user: "Vinay",
  age: 35
};

// Using call to invoke the getName method of object1 with the this value set to object2
getName.call(object2,"Karnataka");
getName.apply(object1,["Karnataka","India"])
const output = getName.bind(object2,"Karnataka","India");
output()
console.log(object1.toString())

function sum(){
  let total =0;
  for(let i=0;i<arguments.length;i++){
    total+=arguments[i]
  }
  console.log(total)
}
sum(1e6,8e6,9e6)

const obj5 = {};

Object.defineProperties(obj5, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {value:{null:"string"},writable: true}
});

console.log(obj5.property1); // Output: 42
console.log(obj5.property2.null)

  //tasks
  let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
function unique(arr){
    return Array.from(new Set(arr) )
    }
    console.log(unique(values))

  //anagrams
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function anagrams(arr){
    const map = new Map();
    for(let i of arr){
        let word = i.toLowerCase().split("").sort().join("");
        console.log(word)
        map.set(word,i)
    }
    console.log(map)
    return Array.from(map.values())
}
anagrams(arr);