import React from 'react';

// Button is a presentational component. It doesn't have any state or methods defined, its only job is to render some JSX based on the props it has received
// Destructure the props object we've been passed by the parent component (App)
const Button = ({ on, handleClick }) => {
    // Add a click event listener to the button and pass it the handleClick function that the parent component passed down in props
    // The value of on was stored in the state of App and has been passed down to Button as a prop. If its value is true, we return ON, which is injected as the inner text of the button. Otherwise, we return OFF. When rendering JSX, you cannot use the if/else/else if keywords, you must use the ternary operator
    return <button onClick={handleClick}>{ on ? "ON" : "OFF" }</button>
}

export default Button
