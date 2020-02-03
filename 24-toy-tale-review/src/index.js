let addToy = false;
const fetchURL = "http://localhost:3000/toys/";

const grabEl = identifier => {
  return document.querySelector(identifier);
};

const makeElement = (element, className = "") => {
  let el = document.createElement(element);
  el.className = className;
  return el;
};

const toyCollection = grabEl("#toy-collection");

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const form = grabEl(".add-toy-form");

  
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  const fetchAndRenderToys = () => {
    fetch(fetchURL)
      .then(resp => resp.json())
      .then(renderToys);
  };

  ///Render one toy

  const renderToy = toy => {
    const { name, image, likes } = toy;
    //   `<div class="card">`
    //   * `h2` tag with the toy's name
    // * `img` tag with the `src` of the toy's image attribute and the class name "toy-avatar"
    // * `p` tag with how many likes that toy has
    // * `button` tag with a class "like-btn"

    let div = makeElement("div", "card");
    let h2 = makeElement("h2");
    let img = makeElement("img", "toy-avatar");
    let p = makeElement("p");
    let button = makeElement("button", "like-btn");

    h2.innerText = name;
    img.src = image;
    p.innerText = likes;
    button.innerText = "Like <3";

    div.append(h2, img, p, button);
    toyCollection.append(div);

    //Add like

    button.addEventListener("click", () => {
 

      fetch(fetchURL + toy.id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          likes: p.innerText
        })
      });

      p.innerText++;
    });
  };

  //Render all toys
  const renderToys = toys => {
    toys.forEach(toy => {
      renderToy(toy);
    });
  };
  // debugger

  form.addEventListener("submit", e => {
    e.preventDefault();
    //I need to grab the form inputs
    let bodyObj = {
      name: form.name.value,
      image: form.image.value,
      likes: 0
    };

    fetch(fetchURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bodyObj)
    })
      .then(resp => resp.json())
      .then(renderToy);
    form.reset();
  });

  fetchAndRenderToys();
});
