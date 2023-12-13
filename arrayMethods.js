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
//console.log(filterRange(arr,1,4))


// filter in place
function filterRangeInPlace(arr, a, b) {
for(let i=0;i<arr.length;i++){
    if(arr[i]<a || arr[i]>b){
        arr.splice(i,1)
        i--
    }
}
}
filterRangeInPlace(arr, 1, 4);
console.log(arr)

let arr2 = [5, 2, 1, -10, 8];
console.log(arr2.sort((a,b)=>{return b-a}))

let arr3 = ["HTML", "JavaScript", "CSS"];
function copySorted(){
    return arr3.slice().sort()
}
let sorted = copySorted();
console.log(sorted);
console.log(arr3)