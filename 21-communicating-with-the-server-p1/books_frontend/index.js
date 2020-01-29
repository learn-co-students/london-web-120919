const form = document.querySelector("#new-book-form")

form.addEventListener("submit", function(e){
  e.preventDefault()
  const card = document.createElement("div")
  const bookList = document.querySelector("#book-list")

  card.classList.add("card")
  card.innerHTML = `<img src="${form.children[8].value}">
     <h3>${form.children[1].value}</h3>
     <p>${form.children[4].value}</p>
     <button name="delete-book">Delete Book</button>`
  bookList.appendChild(card)
})

// Fetch will make a request to a URL and return a promise containing the response from the server. The promise will start off as pending and change to resolved when all the data from the server has been successfully received by the client.
// INDEX
fetch("http://localhost:3000/books")
  // Then will only call the function it's passed as an argument once the promise the fetch returns has been resolved. The promise will then be passed to the callback function as an argument - in this case, response.
  .then(function(response){
    // Return the JSON contained within the resolved promise.
    return response.json()
  })
  // We then pass the json to another function as an argument, in this case books.
  .then(function(books){
    // We can now have this function do whatever we want with the JSON the server sent back to us. In this case, we just log it to the console.
    console.log(books)
  })

// CREATE
// By default, fetch makes a get request, but we can create configuration objects to change the verb we're using and include headers and a body with our request.
const postConfigurationObject = {
  // Specify which HTTP verb the request will use.
  method: "POST",
  // Headers are metadata - information about the request itself. In this case, we tell the server to expect to receive some JSON as part of our request.
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  // The body will contain any actual data we want to send as part of our request. In this case, we are sending over a JSON object with the values for the new book we want to create.
  body: JSON.stringify({
    title: "The Bell Jar",
    author: "Syliva Plath",
    img: "https://s26162.pcdn.co/wp-content/uploads/2018/01/395040.jpg"
  })
}
// This time we also pass fetch our postConfigurationObject as an argument. This will tell it to make a POST request to the server, including the headers and body we specified.
fetch("http://localhost:3000/books", postConfigurationObject)
  .then(function(response){
    return response.json()
  })
  .then(function(book){
    // In this case, the JSON the server returned will be an object representing the new book we've just created.
    console.log(book)
  })


// UPDATE
const patchConfigurationObject = {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  // Because we are updating, we can include only keys for attributes we want to update in our body. In this case, we only include a new title, so the author, img and id of the book we're updating will stay the same.
  body: JSON.stringify({
    title: "The Bell Jar 2: Electric Boogaloo"
  })
}
fetch("http://localhost:3000/books/9", patchConfigurationObject)
  .then(function(response){
    return response.json()
  })
  .then(function(book){
    // In this case, the JSON the server returned will be an object representing the book we've just updated, with its new values.
    console.log(book)
  })

// DELETE
const deleteConfigurationObject = {
  method: "DELETE"
}
fetch("http://localhost:3000/books/9", deleteConfigurationObject)
  .then(function(response){
    return response.json()
  })
  .then(function(book){
    // In this case, the JSON the server returned will be empty, to represent that we have just deleted the given book.
    console.log(book)
  })
