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
  const pdtName = products.map(i=> i.price).reduce((acc,cur)=> {return acc+cur},0)
  console.log(pdtName);