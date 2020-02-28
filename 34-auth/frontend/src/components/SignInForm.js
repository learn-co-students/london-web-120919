import React from 'react'
import API from "../API"


class SignInForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // Send the data from the form to the server in order to authenticate the user
    API.signIn(this.state)
      // The server then responds with the username and a token generated from the user's id to confirm we've been authenticated successfully. We then use the signIn function passed down in props to set the state of username in App to be the username we've been sent back and store the token we've been sent back in localStorage
      .then(json => this.props.signIn(json.username, json.token))
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Username:</label>
        <input type="text" name="username" onChange={this.handleChange}/><br/>

        <label>Password:</label>
        <input type="password" name="password" onChange={this.handleChange}/><br/>

        <input type="submit" value="Sign In"/>
      </form>
    )
  }
}

export default SignInForm
