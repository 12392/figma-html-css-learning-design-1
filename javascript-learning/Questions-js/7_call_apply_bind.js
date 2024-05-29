// Ques 1

const person = {
  name: "Alex"
};

function sayHi(age) {
  return `${this.name} is ${this.age}`
}
console.log("ques1")
console.log(sayHi.call(person, 24))
console.log(sayHi.bind(person, 24))

// Ques 2
console.log("\n Ques 2")

const age = 10;

const person1 = {
  name: "Alex",
  age: 20,
  getAge: function(){
    return this.age;
  }
};

var p = {age: 24};
console.log(person1.getAge.call(p));

// Ques 3
console.log("\n Ques 3")

var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);

// Ques 4
console.log("\n Ques 4")

const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Queen' }
];

function printAnimals(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }

  for (let i = 0; i < animals.length; i++) {
    printAnimals.call(animals[i], i); 
  }
  