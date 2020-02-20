import React, { Component } from 'react';

import WidgetSelector from './components/WidgetSelector'
import Dog from './components/Dog'

class App extends Component {
  constructor() {
    super()
    // Set up our initial, default state for the App
    this.state = {
      selectedWidget: "timer",
      // Set a default loading image for the dogImg so that the user will be able to see something if it takes time for us to get a response back from the API
      dogImg: "https://northerntechmap.com/assets/img/loading-dog.gif",
      timer: 0
    }
  }
  
  componentDidMount() {
    // When the App component mounts, fetch a dog from the API and store the image URL in state
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => this.setState({
      dogImg: data.message
    }))
  }

  handleClick = () => {
    this.setState({
      // Flip the state of selectedWidget to either timer or stock depending on what it currently is
      selectedWidget: this.state.selectedWidget === "timer" ? "stock" : "timer"
    })
  }

  render() {
    return (
      <div id='app'>
        { /* Render WidgetSelector and pass down the current state of selectedWidget so that it knows which widget to render and a click event handler to switch the state to the other option as props */ }
        <WidgetSelector selectedWidget={this.state.selectedWidget} handleClick={this.handleClick}/>
        { /* Render Dog and pass down the dogImg URL we fetched from the API when this App component first mounted */ }
        { /* <Dog dogImg={this.state.dogImg} /> */ }
      </div>
    )
  }
}

export default App;
