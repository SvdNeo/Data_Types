
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
