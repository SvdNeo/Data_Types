// logging user information
const users = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 32 },
    { id: 3, name: 'Charlie', age: 22 }
  ];

  const access = users.forEach((id)=>{
    console.log(`The user with id ${id.id},name ${id.name} and age${id.age}`)
  })
  console.log(access)
//using map for transformation
const products = [
    { id: 101, name: 'Laptop', price: 1200 },
    { id: 102, name: 'Smartphone', price: 500 },
    { id: 103, name: 'Headphones', price: 80 }
  ];
  const totalPdtPrice = products.map(i=> i.price).reduce((acc,cur)=> {return acc+cur},0)// other option is products.reduce((sum,pdt)=>sum+pdt.price,0)
  const filtered = products.filter(i=> i.price>=500).map(x=>x.name)
  console.log(totalPdtPrice);
  console.log(filtered)

  const voters = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 32 },
    { id: 3, name: 'Charlie', age: 22 },
    { id: 4, name: 'David', age: 19 },
    { id: 5, name: 'Eve', age: 28 }
  ];
  const notEligible = voters.some(i=>i.age<18)
  console.log(notEligible)
  const eligible = voters.every(i=>i.age>=18)
  console.log(eligible)

  const firstUserKeys = Object.values(voters[0]);
console.log(firstUserKeys);
const array = voters.map(i=>[i.id,i.name,i.age]);
console.log(array)