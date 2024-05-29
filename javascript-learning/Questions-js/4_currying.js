// currying

function f(a) {
  return function(b) {
    return "Curryng "+ a + " "+ b; 
  }
}

console.log(f(5)(4))

// Ques 1 -> Why should we use currying?
// -> To avoid apssing same variable again and again
// ->  To create high oerder function
// -> To create function pure & less prone to errors

// Ques 2 
// sum(4)(6)(1)

function sum(num1){
  return function (num2){
    return function (num3){
      return 'Ques 2 Sum is '+ (num1 + num2 + num3);
    }
  }
}

console.log(sum(4)(6)(1));

// Ques 3 
// evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("substract")(4)(2) => 2

function evaluate(operation){
  return function(num1){
    return function(num2){
      switch (operation) {
        case "sum":
          return num1 + num2;
        break;
        case "multiply":
          return num1 * num2;
        break;
        case "divide":
          return num1 / num2;
        break;
        case "substract":
          return num1 - num2;
        break;
        default:
          return "invalid operation"
        break;
      }
    }
    }
  }

  console.log(evaluate("multipl")(4)(2))

  // Ques 4
  // Infinite Currying -> sum(1)(2)(3)....(n)

  function add(a){
    return function(b){
      if(b){
        return add(a + b);
      } 
      return a;
    }
  }

  console.log("Infinite currying",add(1)(2)())

  // Ques 5
  // Currying vs Partial Application

  // Partial application

  function f1(a) {
    return function(b,c){
      return a + b + c
    }
  }

  console.log("partial Application",f1(3)(4,5)) // while currying ehoul be
                                                // f1(3)(4)(5)


// Ques 6
// Manupulating DOM
function updateElementText(id) {
  return function (content){
    document.querySelector('#' + id).textContent = content
  }
}
const updateHeader  = updateElementText('curry');

updateHeader('hello I am curry update')

// Ques 7 
// curry() -> that conver normal fnc to curry fnc
// converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
  return function curriedFunc(...args){
    // console.log(args.length, func.length)
    if (args.length >= func.length){
      return func(...args)
    }else{
      return function(...next){
        return curriedFunc(...args , ...next)
      }
    }
  }
}

const add2 = (a,b,c) => a+b+c;

const totalSum = curry(add2);

console.log("Conversion Normal func to  Curry ",totalSum(1)(2)(3))