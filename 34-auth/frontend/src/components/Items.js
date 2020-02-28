import React from 'react'
import API from "../API"

class Items extends React.Component {
  constructor(props) {
    super()
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    // Check if a user is logged in by seeing if the username prop we were passed has a value
    if(!this.props.username) {
      // If not, redirect them to the SignInForm
      this.props.history.push("/sign-in")
    } else {
      // Otherwise, make a request to the server with our token to get back all of this user's items
      API.getItems(localStorage.token)
      // Set the state of items to be the items sent back by the server
        .then(json => this.setState({
          items: json.items
        }))
    }
  }

  renderItems() {
    // For every item in state, create an li with a h3 containing that item's name and a p containing that item's description
    return this.state.items.map(item =>
      <li key={item.id}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </li>)
  }


  render() {
    return(
      <div>
        <h2>Here are all of your items</h2>
        <ul>
        { this.renderItems() }
        </ul>
      </div>
    )
  }
}

export default Items
