//task-1
function camelize(str){
    return str.split("-").map((letter,index)=> index===0 ? letter : letter[0].toUpperCase()+letter.slice(1)).join("")
}
console.log(camelize("list-style-image"))