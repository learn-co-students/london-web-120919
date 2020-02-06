// First-class functions - functions can be stored in variables and passed around as arguments just like any other object.
// Store an anonymous function inside a variable called logMessage.
const logMessage = () => {
  console.log("I'm a first-class function!")
}
// Pass logMessage as a callback function to addEventListener - the function will only be called when the click event on the body is fired.
document.body.addEventListener("click", logMessage)

// Pure Functions - Don't read any information other than the data they are passed as arguments and do the same thing every time with that information, not causing any side effects to anything else. Makes them reliable, predictable and easy to test.
// No matter how many times I call this add method, as long as I pass it the same arguments, it will always return the same result e.g. 1 + 1 will never change.
const add = (number1, number2) => {
  return number1 + number2
}


// Immutability - Something which can't be chagned after it's been defined, so it always keeps the same value.
// In JavaScript, we can make variables immutable using const.
const immutableNumber = 10 // This variable will always have the value of 10 and can never be reassigned.
// However, you can still change the state of elements within arrays or keys and values within objects, even if they are defined using const.
const immutableArray = [] // This variable will always be an array. However, I can change, add, or remove the elements inside it.
const immutableObject = {} // This variable will always be an object. However, I can change, add or remove the keys and values inside it.

// Anonymous functions - Functions can be named, or, anonymous functions can be stored in a variable or passed as an argument to another function.
// Named function.
function namedFunction() {
  console.log("I'm a named function!")
}
// Anonymous function stored in variable.
const anonymousFunctionStoredInVariable = () => {
  console.log("I'm an anonymous function stored in a variable!")
}
// Anonymous function passed as a callback to another function.
setTimeout(() => {
  console.log("I'm truly anonymous!")
}, 1000)

// Higher-order functions - These are functions which either take another function as an argument or return a function. Essentially, they are functions which deal with functions.
const numbers = [1, 2, 3]
const doubles = numbers.map(number => number * 2)

// Scope - Where a variable is defined determines what parts of the code can see it.
const scopeFunction = () => {
  // This variable cannot be accessed outside of the scope of this function, because it was defined here.
  const myNumber = 1

  const nestedFunction = () => {
    // This variable is defined at an even deeper level. Again, it cannot be accessed outside of the scope of this function.
    const nestedNumber = 2
    // This function is able to access the myNumber variable even though it was not defined in here because it is still within scope - this function is defined within the function where myNumber was defined. Essentially, code can see out of its function to higher levels, but cannot see inside of functions nested deeper within it.
    return myNumber + nestedNumber
  }
}

// Closures - Gives you access to the scope of a function from outside of that function.
const myClosure = () => {
  // Here, we define a variable and function that won't be accessible outside of this function.
  const message = "I'm being called outside of the scope I was defined in!"
  const displayMessage = () => {
    console.log(message)
  }
  // The last thing this function does is call the nested function defined within it, which wouldn't be accessible outside of this function.
  displayMessage()
}
// We can't call displayMessage directly because it was defined out of scope, but we can call myClosure, which calls displayMessage for us - effectively giving us access to a function and variables that are not in scope.
myClosure()

// Declarative as opposed to imperative - With imperative programming, you define what you want to happen with every detail of how to do it e.g. Go to the kitchen, get a knife, cut off two slices of bread, get some ham from the fridge, cut it into slices, put the slices of ham between the slices of bread, put the sandwich on a plate, bring it back to me.
// With declarative programming, you simply ask what you want to happen, without going through the steps needed to actually implement this e.g. Make me a ham sandwich.
const greetings = ["Hello", "Hi", "Hi", "Hey", "Hi"]
// Imperative programming example.
function imperativeFilter(words) {
  const filteredWords = []
  for (var i = 0; i < words.length; i++) {
    if(words[i] !== "Hi") {
      filteredWords.push(words[i])
    }
  }
  return filteredWords
}
const imperativeFilteredWords = imperativeFilter(greetings)
// Declarative programming example.
const declarativeFilteredWords = greetings.filter(word => word !== "Hi") // Much shorter, simpler and easier to read and understand.

// Recursion - solving a problem by applying the same logic repeatedly in a loop until a given condition ends it.
const countdown = (number) => {
  // First, we log out number's current value.
  console.log(number)
  if(number > 0) {
    // If number is greater than 0, we have the countdown function call itself, passing in number - 1. This restarts the function, which will then print out the number and then call itself again. The function will constantly perform the same action with number 1 less than it previously was until finally number is 0 and the loop ends.
    countdown(number - 1)
  }
}
