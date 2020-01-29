document.addEventListener("DOMContentLoaded", function(){

  const button = document.querySelector("#event-button")
  button.addEventListener("click", function(e){
    document.querySelector(".main-heading").style.fontFamily = "Comic Sans MS"
    e.target.innerText = "Now doesn't that look nice????"
  })

  // Grab the form and add an event listener to it
  document.querySelector("form").addEventListener("submit", function(e){
    e.preventDefault()
    // The event listener function will:
    // Grab the values of the name and age input fields
    const name = document.querySelector('input[name="name"]').value
    const age = document.querySelector('input[name="age"]').value
    // Create a new p tag with the name and age separated by a dash
    const p = document.createElement("p")
    p.innerText = `${name} - ${age}`
    // Add the new p tag to the students-list div
    document.querySelector("#students-list").appendChild(p)
  })

})
