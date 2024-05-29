// objects 

const user = {
  name: "Suryansh Gupta",
  age: 25
}

console.log(user)

// access property
console.log("Access Property", user.name);

// modify property
user.name = 'Suraj Gupta'
console.log("Modify Property", user)

// delete a property
delete user.age

console.log('Delete Property(age)', user)

// Ques 1

const func =(
  function (a) {
    delete a;
    return a;
  }
)(5);

console.log(func)

//Ques2 -> How to create a property having space in between

const user1 = {
  name: "Suryansh Gupta",
  age: 25,
  'hello everyone': true,
}
console.log(user1)
console.log(user1['hello everyone'])
// for delete
delete user1['hello everyone']
console.log(user1)

// computed properties

const property = "FirstName"
const name = "Suryansh Gupta"

const user3 = {
  [property]: 'hello',
  [name]: 25
}

console.log("Computed Properties",user3)

// Looping through objects
for (key in user3){
  console.log(key, user3[key]);
}

// Ques 1

const obj = {
  a: 'one',
  b: 'two',
  a: 'three'
}

console.log("Ques 1",obj)

// Ques 2
// create a function multiplyByTwo(obj) that
// multiplies all numeric property value of nums by 2

let nums = {
  a: 100,
  b: 200,
  tiile: "My Nums"
}

function multiplyByTwo(obj) {
  for (key in obj){
    if(typeof (obj[key]) === "number"){
      obj[key] = obj[key]*2
    }
  }
  console.log("Ques 2",obj)
}

multiplyByTwo(nums)

// Ques 3

const a = {}
const b = {key: "b"};
const c = {key: "c"};

a[b] = 123;
a[c] = 456;

console.log("Ques 3 ",a[b])

// Ques 4
// What is JSON.stringify and JSON.parse

const user4 = {
  name: "jhon",
  age: 24
}

const strObj = JSON.stringify(user4)
// Convert above in String
console.log("Stringify", strObj , " " ,typeof strObj)

// convert back in object
const obj1 = JSON.parse(strObj);
console.log("Parse", obj1 , " " ,typeof obj1)


// Ques 5
const user5 = {name: "jhon", age: 21 }
const admin = {admin: true, ...user5}

console.log("ques 5", admin)

// Ques 6

const settings = {
  username: "jhon",
  level: 19,
  health: 90
}

const data = JSON.stringify(settings, ["level", "health"]);
console.log("Ques 6",data)

// Ques 7

const user6 ={
  name1: "Jhon",
  age: 25,
  fullname: {
    first: 'ab',
    last: 'cd'
  }

}

const { name1 } = user6

console.log("Ques 7",name1)

const {fullname:{first}} = user6;
console.log("Ques 7",first)

// Ques 8
// Object refrencing

let obj2 = {greeting: "Hey"};
let d;

d = obj2; // it will refrence any chnage to onj will change d
obj2.greeting = "Hello"
console.log("Ques 8", d.greeting) 

// Ques 9

console.log({a: 1} == {a: 1}); // false bacuse both poitnt to differnt memory space
console.log({a: 1} === {a: 1} ); //flase

// Ques 10

let person = {name: "jhon"};
const members = [person];

person = null; // it will not effect

// person.name = null;// it will effect

console.log("Ques 10",members)


// Ques 11

const value = {number: 10}

const multiply = (x = {...value}) =>{
  console.log((x.number *= 2));
}

multiply();
multiply();
multiply(value);
multiply(value);

// Ques 12

function changeAgeAndRefrence(per){
  per.age = 25;
  per = {
    name: "jhon",
    age: 50,
  };

  return per;
}

const personObj = {
  name: 'Alex',
  age: 30,
};

const personObj1 = changeAgeAndRefrence(personObj);

console.log(personObj);
console.log(personObj1)

// shallow copy  and deep copy
let user7 = {
  name: 'Alex',
  age: 25
}

console.log(user7)