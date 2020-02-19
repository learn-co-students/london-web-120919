import React from 'react'

// Form is a presentational component. It doesn't have any state or methods defined, its only job is to render some JSX based on the props it has received
// Destructure the props object we've been passed by the parent component (App)
const Form = ({ handleChange, handleSubmit }) => {
    return (
      // Add a submit event listener to the button and pass it the handleSubmit function that the parent component passed down in props
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        { /* If the value of either of the input fields changes, we call the handleChange method passed down by the parent component in props */ }
        <input type="text" name="name" onChange={handleChange}/>
        <br/>
        <label>Age:</label>
        <input type="text" name="age" onChange={handleChange}/>
        <br/>
        <input type="submit" value="Submit Details" />
      </form>
    )
}


export default Form
