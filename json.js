
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  let json = JSON.stringify(student);
  console.log(typeof json)
  console.log(JSON.stringify(undefined))
  console.log(JSON.stringify([1,'a',3]))

  let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    },
    user:function(a,b){return a+b},
    user2:undefined,
    [Symbol('id')] : 123

  };
  console.log(JSON.stringify(meetup))