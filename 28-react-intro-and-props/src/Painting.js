import React from 'react'

// Another example of a functional component. If we set it up to take an argument, then when it is rendered, that argument will be an object containing any props passed to it by its parent component. Here, we immediately destructure the props object passed and create a variable called painting equal to the value of the key in props named painting, which will be the value that was passed to that prop by the parent component
const Painting = ({ painting }) => {
  return(
    <li>
      { /* Pull out the painting object from props and then access the title and image attributes in order to set the content of our h2 and img tags */ }
      <h2>{painting.title}</h2>
      <img src={painting.image}/>
    </li>
  )
}

// Export our class as a named export
export default Painting
