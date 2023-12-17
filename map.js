
const first = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"],
  ]);
  console.log(first.entries())// it gives map entries
  console.log(first.keys());// iterator as keys
  console.log(first.values())
  console.log(first.delete(4))

  function test(a,b,c){
    if(arguments.length == 0){
        console.log("Min one argument")
    }else if(arguments.length == 1){
        console.log(" one argument called")
    }else if(arguments.length == 2){
        console.log(" Two argument called")
    }else if(arguments.length == 3){
        console.log(" Three argument called")
    }
    return "function over"
     
}
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  console.log(Array.from(recipeMap.keys()))
  console.log(Array.from(recipeMap.values()).filter(i=>i>50).reduce((acc,cur)=>acc+cur,0))// recipeMap.values() gives out map itterator which is not itterable hence by using Array.from we can convert it into itterable array where we can apply array methods
