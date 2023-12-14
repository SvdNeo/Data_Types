let str = "Keys";
for(let val of str){
    console.log(val)
}

let user = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  for(let key in user){
    let keys = [];
    keys.push(user[key].id)
    console.log(keys)
  }

  //Array.from
  let range = {
    0: "Hello",
    2: "World",
    length: 2
  }
  let rangeArr = Array.from(range);
  console.log(rangeArr)