// Define our base URI - the URL of every request we make will start with this.
const baseURI = "http://localhost:3000/books"
// Make a GET request to /books (Index route) in order to get back every book and return the JSON retrieved from the promise value - we will pass that on to another method later.
function fetchBooks() {
  return fetch(baseURI)
    .then(function(response){
      return response.json()
    })
}

// Fetch the array of book objects from the database and pass it to a function which iterates through them and passes each one into a function called renderBook.
function renderBooks() {
  fetchBooks()
    .then(function(books){
      for (let i = 0; i < books.length; i++) {
        renderBook(books[i])
      }
    })
}

// For each book, create a div with the class of card containing an img tag with that book's img url, an h3 containing that book's title, a p tag containing that book's author and a delete button for that book and add it to the book list div
function renderBook(book) {
  // Create the div with a class of card that will contain the information of this book.
  const card = document.createElement("div")
  card.classList.add("card")
  // Create img, h3 and p tags inside the div and inject into them the value of this book's img url, title and author respectively.
  card.innerHTML = `
  <img src="${book.img}" />
  <h3>${book.title}</h3>
  <p>${book.author}</p>
  `
  // Create a button and add an event listener so that when a user clicks it, we can delete that book.
  const button = document.createElement("button")
  button.innerText = "Delete Book"
  button.addEventListener("click", function(e){
    // When the click event fires, we will call destroyBook and pass it the book object we are currently rendering, so that it will know which book to tell the server to destroy.
    destroyBook(book)
    // When the server responds that the book has been destroyed successfully, we'll then remove it from the DOM by accessing the button we clicked (e.target) and removing its parent element (the div we want to remove).
      .then(function(){
        e.target.parentNode.remove()
      })
  })
  // Append the button to the card div and then append the card to the book-list div.
  card.appendChild(button)
  document.querySelector("#book-list").appendChild(card)
}


// Add an event listener so that when our form is submitted, we will create a new book with the information in the form.
document.querySelector("#new-book-form").addEventListener("submit", function(e){
  e.preventDefault()
  // Create a new book object and set its attributes to be the values of the relevant input fields.
  const title = document.querySelector('input[name="title"]').value
  const author = document.querySelector('input[name="author"]').value
  const img = document.querySelector('input[name="cover"]').value
  const book = {
    title: title,
    author: author,
    img: img
  }
  // We communicate with the server first. When the book is created and the promise is resolved, we then take the newly created book object it returned to us and pass it as an argument to renderBook in order to add it to the DOM.
  createBook(book)
    .then(function(newBook){
      renderBook(newBook)
    })
})

// Tell to server to save our newly created book in the database.
function createBook(book) {
  // Create our configuration object to allow us to make a POST request with the correct headers. The body will be the book object we have created and passed to this function as an argument.
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(book)
  }
  // Make the POST request to the server using our configurationObject, adding the new book to our database and return the Promise with .json called on it, which will be the newly created book object from the database.
  return fetch(baseURI, configurationObject)
    .then(function(response){
      return response.json()
    })
}

// Again, we communicate with the server first. Once the book has been successfully deleted from the database and the promise resolved, we then remove it from the DOM.
function destroyBook(book) {
  // Make a request to the correct URL by concatenating the base URI and the value of the book object's id, along with a configuration object that allows us to make a DELETE request.
  const configurationObject = {
    method: "DELETE"
  }
  return fetch(`${baseURI}/${book.id}`, configurationObject)
    .then(function(response){
      return response.json()
    })
}

// When the page loads, fetch all of the books in our database and add them to the DOM.
renderBooks()
