
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
//   let room = {
//     number: 23
//   };
//   let meetup1 = {
//     title: "Conference",
//     participants: ["john", "ann"]
//   };
  
//   meetup1.place = room;    
//   room.occupiedBy = meetup1;
//   console.log(room);
//   console.log(meetup1)
//   console.log(JSON.stringify(room));
//   console.log(JSON.stringify(meetup1))// it doesnt stringify asit has circled reference object

let room = {
    number: 23,
    name:"san"
  };
  let meetup1 = {
    title: "Conference",
    participants: ["john", "ann"],
    places:room
  };
  room.occupiedBy = meetup1
 console.log(JSON.stringify(meetup1, ['title', 'participants']));
 console.log(JSON.stringify(meetup1, ['title', 'participants','places','name',]));
 console.log(JSON.stringify(meetup1, []));

 let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
  };
  
  console.log(JSON.stringify(user, null, 2));

  //task 1
  let user1 = {
    name: "John Smith",
    age: 35
  };
  const string = JSON.stringify(user1)
  const parsed = JSON.parse(string)
  console.log(string);
  console.log(parsed)