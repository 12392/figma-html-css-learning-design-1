// class Animal{

//   constructor(legs, speak){
//     console.log('Parent called');
//     this.legs =legs;
//     this.speak = speak
//   }

//   no_of_legs(){
//     console.log(`it has ${this.legs} legs`)
//   }

//   sound(){
//     console.log(`it has ${this.speak} sound `)
//   }

// }

// class Dog extends Animal{

//   // super()

//   constructor(legs,speak,age){
//     super(legs,speak);
//     console.log('child called');
//     this.age = age;
//     // this.speak = speak;
//   }

//   isCute(){
//     if (this.age < 2){
//       console.log('Hello Cute')
//     }
//     else{
//       console.log('Hello big one',this.age)
//     }
//   }
// }

// dog =  new Dog(4,'bark bark',1)
// console.log(dog.__proto__)
// dog.no_of_legs();
// dog.sound();
// dog.isCute();
// // console.log(dog.isCute())

// console.log('\n')

// for(key in dog){

//   console.log(dog.hasOwnProperty(key))
// }

const user1 = {
  firstname: "Suryansh",
  lastname: "Gupta",
  age: 26,
  is18: function() {
    if (this.age > 18) {
      console.log("is adult");
    } else {
      console.log("Not an adult");
    }
  },
};



// const user2 = {
//   firstname: "Suryansh",
//   lastname: "Gupta",
//   age: 26
// };

const user2 = Object.create(user1)
user2.firstname = 'Harshit'
user2.is18()
console.log(user2);
// console.log(user1.is18());