import React, { Component} from 'react'
import PaintingsList from './containers/PaintingsList'
import PaintingContainer from './containers/PaintingContainer'
import Painting from './components/Painting'
import NavBar from './components/NavBar'
// Import the Route component so we can create our routes
import { Route } from 'react-router-dom'

import './App.css'

class App extends Component {
  // Set up initial state
  constructor() {
    super()
    this.state = {
      paintings: []
    }
  }

  // When the component mounts, fetch all of the paintings from the database via the server and store them in state
  componentDidMount() {
    fetch("http://localhost:3000/paintings")
      .then(response => response.json())
      .then(json => this.setState({
        paintings: json
      }))
  }

  render() {
    return (
      <div>
        { /* Create our route for the homepage. When you make a get request to /, we will render a h1 that welcomes you to the site. We use exact in order to say - only render this if we get a URL that matches that path exactly. Otherwise, both / and a / with any other text after it would match this route e.g. /paintings would render both the paintings index and this homepage */ }
        <NavBar />
        <Route exact path="/" render={() => <h1>Welcome to my Gallery!</h1>}/>
        { /* This route renders one of our components. React Router will also pass some props to this component that will let it know information about the current and previous URLs  */ }
        <Route exact path="/paintings" component={() => <PaintingsList paintings={this.state.paintings}/>}/>
        { /* Dynamic route with an id parameter set up. This will be passed to the painting component as part of props and be accessible there via match.params */ }
        <Route exact path="/paintings/:id" component={PaintingContainer}/>
      </div>
    )
  }
}

export default App
