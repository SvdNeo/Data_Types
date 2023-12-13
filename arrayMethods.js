//task-1
function camelize(str){
    return str.split("-").map((letter,index)=> index===0 ? letter : letter[0].toUpperCase()+letter.slice(1)).join("")
}
console.log(camelize("list-style-image"))


//filter range 
let arr = [5, 3, 8, 1];

function filterRange(arr, a, b){
    return arr.filter(i=>(i>=a && i<=b))
}
console.log(filterRange(arr,1,4))