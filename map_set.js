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