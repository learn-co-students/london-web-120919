import React from "react"
import { Link } from "react-router-dom"

// Create a navbar which has links to all of our routes, giving the user a way to access them
const NavBar = () => {
  return(
    <nav>
      { /* Use Link tags rather than anchor tags in order to prevent making a new GET request and having to load all the HMTL, CSS and JavaScript files every time you go to a different route. This allows us to get the URL the user selected and render that component, while still keeping them on the same HTML page */ } 
      <Link to="/">Homepage</Link>
      -
      <Link to="/paintings">All Paintings</Link>
    </nav>
  )
}

export default NavBar
