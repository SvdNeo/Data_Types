const set1 = new Set();
set1.add(44)
set1.add('44');
set1.add("forty-four")
set1.add(44)
console.log(set1)


const set2 = new Set();
set2.add({x:10,y:20}).add({x:20,y:30})
for(let e of set2.entries()){
    console.log(e)
}
set2.forEach(i=>{if(i.x>10){set2.delete(i)}})
console.log(set2)

const set3 = new Set();
set3.add(42);
set3.add('forty two');

const iterator1 = set3.entries();
for(let i of iterator1){
    console.log(i)
}

 

function logg(val1,val2,set){
    console.log(`[${val1}]:${val2}`)
}
new Set(["foo","foo1","foo2"]).forEach(logg)