// var vs ler vs const

// ======================================================================================

// Scope

// var is global scope 

{
  var a = 5;
}

console.log("Global Scope",a);

// let & const is block scope

{
  let b = 5;
  console.log("Block Scope",b);
}

// console.log(b); //Uncaught ReferenceError: b is not defined


// ======================================================================================


// Shadowing 

function test(){
  let a = "Hello"
  if(true){
    let a = "Hi" // Shadowing
    console.log("shadowing", a); // shadowing Hi
  }

  console.log(a); // Hello
}

test();

// Illegal Shadowing

// var can shadow let not vice versa

function test1(){
  var a = "Hello"
  let b = "bye"
  if(true){
    let a = "Hi"; // Shadowing
    // var b = "GoodBye"; // Ilegal shadowing
    console.log("shadowing", a); // shadowing Hi
    console.log("shadowing", b); // shadowing Hi

  }

  console.log(a);
  console.log(b);
}

test1();

// ======================================================================================

// Declaration 

// no error below
var a;
var a;

// ilegal decaration smae for const

// let and const acnnot re-decalare in same scope

// let a;
// let a;


// var & let can initialized without intilization but not const

// var a;
// let b;

// const c; will give error
// it should be intialize  = const c= 5;

// We cannor change cont value but we can do it for let and const

// below is fine

// let a = 5;
// a=6;

// var b=5;
// b=6;

// below will give error
// const c = 5;
// c=6;

// ======================================================================================

// Hoisting

// During the creation phase javascript engine moves the variable & function
// declartion on the top of the code this is hoisting 

// Time between declaration and intialization of the let and const variable

function abc(){
  console.log(a); // undefined

  var a = 10;
}

abc();


function abc1(){
  console.log(a, b, c); // Error due to Temporal dead zone 
  
  const c = 30;
  let b = 20; 
  var a = 10;
}

abc1();