// this keyword
// it is used to refrence something according to the context

// console.log(this)

let user = {
  name: "jhon",
  age: 24,
  childObj: {
    newName: "Alex",
    getDetails() {
      console.log(this.newName, " ", this.name);
    },
  },
};

user.childObj.getDetails(); // Here this will point to immidieate parent
// whereas if getDetails() is a arrow function then it will
// point to global obljec(window)

// secnario
let user1 = {
  name: "jhon",
  age: 24,
  childObj: {
    newName: "Alex",
    getDetails() {
      const nestedArrow = () => console.log(this.newName, " ", this.name);
      nestedArrow();
    },
  },
};
user1.childObj.getDetails();

// this in class point to constructor

// Ques1

const user3 = {
  firstName: "jhon",
  getName() {
    const firstName = "Alex";
    return this.firstName;
  },
};

console.log("Ques1", user3.getName());

// Ques 2

function makeUser() {
  return {
    name: "jhon",
    ref: this,
  };
}

let user2 = makeUser();

console.log("Ques 2", user2.ref.name);

// Ques 3

const user4 = {
  name: "Alex",
  logMessage() {
    console.log("Ques 3", this.name);
  },
};

setTimeout(user4.logMessage, 1000);

// Ques 4

const user5 = {
  name: "Alex",
  greet() {
    return `Ques 4 Hello, ${this.name}!`;
  },
  farewell: () => {
    return `Ques 4 GoodBye, ${this.name}!`;
  },
};

console.log(user5.greet());
console.log(user5.farewell());

// Ques 5
// callback function this  call global object

var length = 4;
function callback() {
  console.log("Ques 5", this.length);
}

const obj = {
  length: 5,
  method(fn) {
    fn();
  },
};

obj.method(callback);

// Ques 6

var length = 4;
function callback() {
  console.log("Ques 5", this.length);
}

const obj1 = {
  length: 5,
  method() {
    console.log(arguments);
    arguments[0](); // it wi print arugument length
  },
};

obj1.method(callback, 2, 3);

// const result = calc.add(10).multiply(5).subtract(30).add(10) console.log(result.total) ---- What is logged?

var calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
};

calc.add(10).multiply(5).subtract(30).add(10) 
console.log(calc.total)
