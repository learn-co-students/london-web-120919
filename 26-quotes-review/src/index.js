// It might be a good idea to add event listener to make sure this file
// only runs after the DOM has finshed loading.

// author: "Ann Richards"
// ​
// id: 1
// ​
// likes: Array [ {…} ]
// ​
// quote: "The here and now is all we have, and if we play it right it's all we'll need."

const getURL = "http://localhost:3000/quotes?_embed=likes";
const quoteURL = "http://localhost:3000/quotes/";

const list = document.querySelector("#quote-list");

const newQuoteInput = document.querySelector("#new-quote");
const newAuthorInput = document.querySelector("#author");
const newQuoteForm = document.querySelector("#new-quote-form");

const createEl = (element, className = "") => {
  let el = document.createElement(element);
  el.className = className;
  return el;
};

document.addEventListener("DOMContentLoaded", () => {
  const fetchAndRenderQuotes = () => {
    list.innerHTML = "";
    fetch("http://localhost:3000/quotes?_embed=likes")
      .then(resp => resp.json())
      .then(renderQuotes);
  };

  //Render one

  const renderAQuote = quoteObject => {
    const { quote, author, id, likes } = quoteObject;

    // We get round a lot of the problems we were having with selecting the right elements by creating them ourselves
    // list.innerHTML += `
    //     <li class='quote-card'>
    //     <blockquote class="blockquote">
    //       <p id="quote" class="mb-0">${quote}</p>
    //       <footer id="author" class="blockquote-footer">${author}</footer>
    //       <br>
    //       <button class='btn-success'>Likes: <span>${
    //         likes ? likes.length : 0
    //       }</span></button>
    //       <button class='btn-danger'>Delete</button>
    //       <button class='btn'>Update</button>
    //     </blockquote>
    //     <form class="${id}"id="edit-form">
    //     <label>Quote:</label>
    //       <input name="quote" value="${quote}"></input>
    //       <br>
    //       <label>Author:</label>
    //       <input name="author" value="${author}"></input>
    //       <input type="submit" value='Update'></input>
    //     </form>

    //   </li>
    // `;

    //Creating the elements manually gives us access to them without needing to query select
    //this gets round a lot of the issues we were having in the review where we were having to add ids to
    //individual elements to ensure we were grabbing the right one

    let li = createEl("li", "quote-card");
    let blockquote = createEl("blockquote", "blockquote");

    let p = createEl("p", "mb-0");
    p.innerText = quote;

    let footer = createEl("footer", "blockquote-footer");
    footer.innerText = author;
    let br = createEl("br");
    let deleteBtn = createEl("button", "btn-danger");
    deleteBtn.innerText = "Delete";
    let likeBtn = createEl("button", "btn-success");
    likeBtn.innerText = "Likes: ";
    let likeSpan = createEl("span");
    likeSpan.innerText = likes.length;
    likeBtn.append(likeSpan);

    let updateBtn = createEl("button");
    updateBtn.innerText = "Update";

    blockquote.append(p, footer, br, deleteBtn, likeBtn, updateBtn);
    li.append(blockquote);
    list.append(li);

    //Now we create the form and set it's visibility to none

    let form = createEl("form", "");
    form.style.display = "none";

    //Create all the elements for the form

    let quoteInput = createEl("input", "");
    quoteInput.value = quote;
    quoteInput.name = "quote";
    let authorInput = createEl("input", "");
    authorInput.value = author;
    authorInput.name = "author";
    let submit = createEl("input", "btn-update");
    submit.value = "Update";
    submit.type = "submit";

    form.append(quoteInput, authorInput, submit);
    li.append(form);

    //Now create an event listener to change the form's display when we click the update button

    updateBtn.addEventListener("click", () => {
        //This ternary will change the display of the button both ways, hiding and unhiding. The way this  
        //has been written is important because if you manually check the form's display property, it won't
        //come up as 'none' but as an empty string. Try out a different ways of implementing this to get a feel for what's happening 
      form.style.display === "block"
        ? (form.style.display = "none")
        : (form.style.display = "block");
    });

    //THE OLD WAY THAT CAUSED ISSUES

    // let quoteEl = document.querySelector("#quote");
    // let authorEl = document.querySelector("#author");

    // let editForm = document.querySelector("#edit-form-"${editForm.className}");

    form.addEventListener("submit", e => {
      e.preventDefault();
      let quoteObject = {
        author: e.target.author.value,
        quote: e.target.quote.value
      };

      p.innerText = e.target.quote.value;
      footer.innerText = e.target.author.value;

      fetch(quoteURL + id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quoteObject)
      });
      //Hide the form once the update has been optimistically rendered
      form.style.display = "none"
    });

        //THE OLD WAY THAT CAUSED ISSUES

    //   quoteEl.innerText = e.target.quote.value;
    //   authorEl.innerText = e.target.author.value;

    //   console.log(quoteURL + e.target.className);
    //   fetch(quoteURL + e.target.className, {
    //     method: "PATCH",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(quoteObject)
    //   });
    // });
  };

  const renderQuotes = quotes => {
    quotes.forEach(quote => renderAQuote(quote));
  };

  function addAQuote(quoteObject) {}

  newQuoteForm.addEventListener("submit", e => {
    e.preventDefault();
    let quoteObject = {
      author: newAuthorInput.value,
      quote: newQuoteInput.value
    };
    newQuoteForm.reset();

    fetch(quoteURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(quoteObject)
    })
      .then(resp => resp.json())
      .then(renderAQuote);
  });

  fetchAndRenderQuotes();
});
