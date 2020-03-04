import React from 'react'
import SignInForm from './components/SignInForm'
import Items from './components/Items'
import NavBar from './components/NavBar'
import { Route } from 'react-router-dom'
// Import an object containing all of our functions which will communicate with the server and name it API
import API from "./API.js"
import './App.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      username: null
    }
  }

  componentDidMount() {
    // If we have a token in localStorage, attempt to use it to validate ourselves against the server
    if (localStorage.token) {
      API.validate(localStorage.token)
      // Pass the username and token the server sends back to signIn
        .then(json => this.signIn(json.username, json.token))
    }
  }
  
  signIn = (username, token) => {
    // Set the state of username to be the username the server sent back
    this.setState({
      username
    })
    // Store the token the server sent back in localStorage, which is on the client-side
    localStorage.token = token
  }

  // Sign the user out by setting the username to null and removing the token key from localStorage
  signOut = () => {
    this.setState({
      username: null
    })
    localStorage.removeItem("token")
  }

  render(){
    return (
      <div >
        {/* Pass down the username to the NavBar so that it knows whether to create a Sign Out button and the signOut function for it to add to that button as a click event */}
        <NavBar username={this.state.username} signOut={this.signOut}/>
        { /* Check if somebody is logged in by seeing if username has a value and render the appropriate JSX */}
        { this.state.username ? <h1>Welcome back, {this.state.username}</h1> : <h1>Welcome, stranger</h1> }
        {/* Pass down our signIn function to SignInForm as a prop */}
        <Route exact path="/sign-in" component={() => <SignInForm signIn={this.signIn}/>}/>
        {/* Pass down the username to the items page so that it can either display that user's items or redirect them to the SignInForm if they are not signed in. Also pass down the router props to that it has access to the push function, which it will use for the redirect */}
        <Route exact path="/items" component={props => <Items {...props} username={this.state.username}/>}/>
      </div>
    )
  }
}


export default App
