// Destructuring - create variables from the keys in an existing object.
const puppy = {
  name: "Andrex",
  age: 1,
  cute: true
}
const { name, age, cute } = puppy
name // "Andex"
age // 1
cute // true

// Key Value assignment shortcut = create the values of keys in a new object from existing variables.
const title = "Big"
const description = "A kid turns into Tom Hanks. Hijinks ensue."
const movie = { title, description }
movie.title // "Big"
movie.description // "A kid turns into Tom Hanks. Hijinks ensue."

// Spread operator - Create a new collection that includes a copy of an existing one.
// Array
const numbers = [1, 2, 3]
const moreNumbers = [...numbers, 4, 5, 6]
moreNumbers // [1, 2, 3, 4, 5, 6]
moreNumbers // [1, 2, 3] - Unchanged
// Object
const person = {
  first_name: "Joe",
  last_name: "Childs"
}
const newPerson = { ...person, eye_colour: "blue"}
newPerson.first_name = "Phil"
newPerson // { first_name: "Phil", last_name: "Childs", eye_colour: "blue"}
person // { first_name: "Joe", last_name: "Childs"} - Unchanged

// Arrow functions - MAINTAIN CONTEXT???
const sayHello = () => {
  return "Hello"
}
sayHello() // "Hello"
// If using the following syntax, the arrow function will implicitly return the value of message.
const sayMessage = (message) => message
sayMessage("Howdy") // "Howdy"

// For of loop - Allows us to easily iterate through arrays.
const magicWords = ["Abra", "Kadabra", "Alakazam"]
for (let magicWord of magicWords) {
  console.log(magicWord)
}

// For in loop - Allows us to easily iterate through keys and values in an object.
const numbersAndLetters = {
  "A": 1,
  "B": 2,
  "C": 3
}
for(let key in numbersAndLetters) {
  console.log(`${key}: ${numbersAndLetters[key]}`)
}

// Custom filter method - takes an array and an illegal element and returns an array with all instances of the illegal element filtered out.
const greetings = ["Hello", "Hello", "Hi", "Howdy", "Hello", "Heya"]
function filterElements(elements, illegalElement) {
  // Create a new array to contain our elements that don't get filtered out.
  const newElements = []
  // Iterate through the array of elements we've been given.
  for (let i = 0; i < elements.length; i++) {
    if(elements[i] !== illegalElement) {
      // Only add the current element to the new array if it doesn't match the illegal element we've been given.
      newElements.push(elements[i])
    }
  }
  // Return the complete, filtered array.
  return newElements
}
filterElements(greetings, "Hello") // Would filter out all instances of the string "Hello" and return [Hi", "Howdy", "Heya"].
// ES6 filter method, does the same as above.
greetings.filter(greeting => greeting !== "Hello")
