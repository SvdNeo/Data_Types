let map = new Map();
map.set("1","str1");
map.set(1,"num");
map.set(true,"bol1")
map.set({name:"sanjay",id:"1"},"nameObj").set([2,3,4,5,"fruits"],{numbers:"continuous"})
console.log(map)
console.log(map.get(1))
console.log(map.get("1"))