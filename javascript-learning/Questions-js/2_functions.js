// Function declarion 
 function test(){
  console.log('Hi I am a Traditional function')
 }

 test();

//  Finction Expression

const test1 = function(){
  console.log('Hi I am a Function expression');
}

test1();

// First class Function

function square(num){
  return num * num;
}

function displayNum(fn){
  console.log( "Squrae is", fn(5))
}

displayNum(square);

// IIFE

(function test2(){
  console.log("IFFE called")
})();

// Callback Function
// passing the function inside the other function params 

// Arrow function

const add = (num1 , num2) =>{
  console.log("Arrow Function", num1 + num2)
}

add(5,6);

// Arrow vs normal func
// 1) Syntax
// 2) Implicit return 
// 3) Argument not present in arrow function
// 4) this keyword always point window in arrow function

// Ques1

(function(x){
  return (function(y){
  console.log("Ques 1",x) // 1
}
  )(2);
})(1)

// Ques 2

for(let i=0; i<5; i++){
  setTimeout(() => {
    console.log("Ques 2",i) // 1 2 3 4 5
  }, i);
}

// Ques 3

for(var i=0; i<5; i++){
  setTimeout(() => {
    console.log("Ques 3",i) // 4 4 4 4 4
  }, i * 1000);
}

// Ques 4 -> Related to Function Hoisting

test3(); // It will not give O/P undefined 
        //  it will call he function

function test3(){
  console.log('Function Ques 4')
}

// Ques 5 -> Related to Function Hoisting

var x = 21

var fun = function () {
  console.log("Ques 5",x); // undefined
  var x= 20;
}

fun();

// Ques 6 -> Params vs Argument
function sqr(num) //parmas 
{
  console.log("Params vs Argument",num * num)
}

sqr(5); //argument


// Ques 7 -> Spread vs Rest

//Rest opeartor always be the last in params

function mult(...nums) // Rest Operator
{
  console.log("Spread vs Rest",nums[0] * nums[1]);
}

var arr = [5,6]

mult(...arr) //Spread operator


