// Returns an array of all h1 elements on the page
// const h1 = document.getElementsByTagName("h1")[0]
// Returns the first h1 element on the page
const h1 = document.querySelector("h1")

// Change the inner text of the heading
h1.innerText = "Code Wars: A New Heading"
// Change the inner HTML of the heading - in this case, two li elements will be created as children of the h1, with "The List Items Strike Back" as its inner text
h1.innerHTML = "Code Wars: <li>The List Items Strike Back</li><li>Return of the List Items</li>"

// Returns the element with the id of "list-heading"
// const h3 = document.getElementById("list-heading")
const h3 = document.querySelector("#list-heading")
// Change some of the CSS attributes of the h3. In this case, its color, background-color and font-size. Any CSS attribute can be accessed via the element's style property
h3.style.color = "blue"
h3.style.backgroundColor = "orange"
h3.style.fontSize = "40px"

// Returns an array of all the elements on the page with a class of "special"
// const specialListItems = document.getElementsByClassName("special")
const specialListItems = document.querySelectorAll(".special")
// Iterate through all of the li elements on the page and make the font-weight of each one bold
for (let i = 0; i < specialListItems.length; i++) {
  specialListItems[i].style.fontWeight = "bold"
}

// Returns an array of all img elements on the page; we then select the first item in that array
// const h1 = document.getElementsByTagName("img")[0]
// Returns the first img element on the page
const image = document.querySelector("img")
// Change the value of the img's src attribute
image.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-dog-breeds-lead-1550631680.jpg?crop=0.669xw:1.00xh;0.220xw,0&resize=640:*"
