import React from "react"
import { Link } from "react-router-dom"

const NavBar = ({ username, signOut }) => {
  return(
    <nav>
    <Link to="/sign-in">Sign In</Link>
    -
    <Link to="/items">Items</Link>
    {/* If the username we've been passed as props is not null, we know there is a user logged in, so we create a button which, when clicked, calls the signOut function we were also passed in order to sign them out */}
    { username && <button onClick={signOut}>Sign Out</button> }
    </nav>
  )
}

export default NavBar
