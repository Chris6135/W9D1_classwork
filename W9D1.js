// function sum() {
//   const argsArr = [];
//   for (let i = 0; i < arguments.length; i++) {
//     let argument = arguments[i];
//     argsArr.push(argument);
//   }

//   return argsArr.reduce(function(acc, el) { return acc + el });


// }

function sum(...args) {
  return args.reduce(function(acc, el) { return acc + el });
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5));


Function.prototype.myBind = function(context) {
  const that = this;
  const argsArr = Array.from(arguments).slice(1);

  return function() {
    const callArgs = Array.from(arguments);
    return that.apply(context, argsArr.concat(callArgs))
  }
}


Function.prototype.myBind = function(context, ...bindArgs)  {
  const that = this;

  return function(...callArgs) {
    return that.apply(context, bindArgs.concat(callArgs));
  }
}

// function testFunction(arg1, arg2, arg3, arg4) {
//   return  c.log(this.name + ar1 + arg2 + arg3 + arg4);
// }
// function sum(a, b){
//   return a + b;
// }

// const addFive = sum.bind(null, 5)(); //retrun val undefined
// addFive(1);
// const giveMeFifteen = sum.myBind(null, 5, 10);
// giveMeFifteen();

// let thingA = testFunction.myBind(markov, 1, 2);
// thingA(3, 4);
// // thingA("chili", "lentils");


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
let binded = markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
let sayHi = markov.says.myBind(pavlov)
sayHi("meow", "a tree", "josh", "kush patel");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true



//curried sum 

function curriedSum(numOfNums){
    // const numbersToAdd = Array.from(arugments)
    const numbers = [];
    
    return function _curriedSum(num){
        numbers.push(num)
        if(numbers.length < numOfNums){
            return _curriedSum
        } else if (numbers.length === numOfNums) { 
            let currSum = 0;
            numbers.forEach(ele => currSum += ele);
            return currSum;
        }
    }
}

const currSums = curriedSum(4); //
currSums(5)(30)(20)(1); // => 56

// const sum = curriedSum(4)

// sum(2)(2)(1) passed one at a time to curried sum;

Function.prototype.curry = function(numArgs) {
    const results = [];
    const that = this;

    return function _curried(el) {
        results.push(el)
        if (results.length < numArgs) {
            return _curried
        } else if (results.length === numArgs) {
            final = results.forEach(ele => that(ele))
            return final;
        }
    }
}

function numAdder(arr) {
    let sum = 0;
    arr.forEach(el => sum += el);
    return sum;

}
function addThree(num) {
    return num + 3
}

let fiveAdds = addThree.curry(5);
console.log(fiveAdds(1)(2)(1)(2)(2));


