// Add an event listener to an element - the first argument we pass is a string of the type of event we want this element to listen for e.g. click, submit, keypress. The second argument is a function we want it to perform only when that event is fired. In this case, we tell the document to wait until the entire DOM is loaded before performing the function, which contains all of our code. In other words, we won't attempt to run any code which manipulates the DOM until it's finished loading.
document.addEventListener("DOMContentLoaded", function(){
  const button = document.querySelector("#event-button")
  // Add a click event listener to the button. The e parameter refers to the event that has been fired.
  button.addEventListener("click", function(e){
    // Grab the h1 with id of main-heading and change its font-family to Comic Sans MS.
    const mainHeading = document.querySelector(".main-heading")
    mainHeading.style.fontFamily = "Comic Sans MS"
    // Access the target that received the event (the button we clicked) via e.target so that we can then manipulate it.
    e.target.innerText = "Doesn't that look better???"
  })

  // We could also define a named fuction and pass this to the event listener as its argument, rather than an anonymous one.
  function changeHeadingFont(e) {
    const mainHeading = document.querySelector(".main-heading")
    mainHeading.style.fontFamily = "Comic Sans MS"
    e.target.innerText = "Doesn't that look better???"
  }
  button.addEventListener("click", changeHeadingFont)

  const form = document.querySelector("form")
  // Add a submit event listener to our form.
  form.addEventListener("submit", function(e){
    // This prevents an event's default behaviour. In this case, it stops the form from submitting a POST request and thus refreshing the page after it's submitted.
    e.preventDefault()
    // Create a new p tag.
    const newStudent = document.createElement("p")

    // Grab the value of the name and age input fields.
    const studentName = document.querySelector('input[name="name"]').value
    const studentAge = document.querySelector('input[name="age"]').value

    // Set the inner text of the new p tag to be the name and age that the user typed in.
    newStudent.innerText = `${studentName} - ${studentAge}`

    // Append the new p tag to the end of our students-list div.
    document.querySelector("#students-list").appendChild(newStudent)
  })

})
