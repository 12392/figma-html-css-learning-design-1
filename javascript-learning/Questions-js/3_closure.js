// closure

function makefunc() {
  var name = "Hello I am Closure"
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makefunc();
myFunc();

// Closure Scope Chain

var username = 'Global Scope';
function makefunc1() {
  var name = "Hello I am Closure1"
    function displayName1() {
    console.log(name, "And I hava a acess of",username);
  }
  return displayName1;
}

var myFunc1 = makefunc1();
myFunc1();


// Ques 1
let count = 0;
(function printCount(){
  if(count === 0){
    let count = 1;
    console.log("Ques1", count)
  }
  console.log("Outer If ques1" , count)
})();

// Ques 2 -> optimization

console.log('========Ques 2 starts=========\n')

console.log('===without Closure====')
function find(index) {
  let a = []
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  console.log(a[index]);
}


console.time("6")
find(6);
console.timeEnd("6")
console.time("12")
find(50)
console.timeEnd("12")

// via closure

console.log('\n===with Closure====')
function find1() {
  let a = []
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }

  return function(index) {
    console.log(a[index]);
}
}

const closure = find1()
console.time("6")
closure(6);
console.timeEnd("6")
console.time("12")
closure(50)
console.timeEnd("12")

console.log('\n========Ques 2 ends=========')

// Ques 3
for(var i=0; i<3; i++){

  function inner(i) {
    setTimeout(function log() {
      console.log("Ques 3",i);
    }, i * 1000);    
  }

  inner(i);

}

// Ques 4 -> private counter via clousre

function counter() {
  var counter = 0;

  function add(incByNum) {
    return counter += incByNum;
  }

  function retrive() {
    return "Counter = " + counter;
  }

  return{
    add,
    retrive
  }
}

const c = counter()
c.add(10);
c.add(15);

console.log("Ques4", c.retrive())


// Ques 5 -> What is Module Pattern

// Module Pattern 

var Module = ( function () {
  function privateMethod() {
    // do something
    console.log("private");
  }

  return {
    publicMethod: function(){
      // can call privateMethod();
      console.log("public");
    },
  };
})();

Module.publicMethod();
// Module.privateMethod();

// The return statement of the Module contains our public functions. 
// The private functions are just those that are not returned. 
// Not returning functions makes them inaccessible outside of 
// the Module namespace. But our public functions can access 
// our private functions which make them handy for helper functions, 
// AJAX calls, and other things.


