import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      // Contains all of the sushis that we'll get from the server
      sushis: [],
      // Keep track of all the sushis that have been eaten, so that we can remove their image and add an empty plate to the table
      eatenSushis: [],
      // Keep track of which set of four sushi we are rendering
      sushiIndex: 0,
      // Keep track of how much balance the user has left - they should only be able to eat sushis they can afford
      balance: 100
    }
  }

  // Get the array of sushi objects from the server and store them in state when the App component mounts
  componentDidMount(){
    fetch(API)
      .then(response => response.json())
      .then(json => this.setState({
        sushis: json
      }))
  }

  // Find out which 4 sushi we are going to render by getting a slice from all of the sushis in state - starting at our current sushiIndex (which we also get from state) and ending 4 index positions away
  getSushisToRender() {
    return this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
  }

  // Increment the sushiIndex in state by 4 in order to get the next slice of 4 sushis
  increaseSushiIndex = () => {
    this.setState({
      sushiIndex: this.state.sushiIndex + 4
    })
  }

  eatSushi = (id, price) => {
    // Only add this sushi object's id to the list of eatenSushis if it isn't in there already and if the current state of balance is greater than or equal to the price of the sushi object i.e. don't let the state of balance drop below 0
    if (!this.state.eatenSushis.includes(id) && this.state.balance >= price) {
      this.setState({
        // Set the state of eatenSushis to be its current state plus the id of the eaten sushi by using the spread operator
        eatenSushis: [...this.state.eatenSushis, id],
        // Decrease the state of balance by the price of the eaten sushi
        balance: this.state.balance - price
      })
    }
  }


  render() {
    return (
      <div className="app">
        {/* Pass down the current 4 sushis, the current state of the list of eatenSushis and the functions that will increase the sushiIndex and add an id to the list of eatenSushis in state as props */}
        <SushiContainer sushis={this.getSushisToRender()} increaseSushiIndex={this.increaseSushiIndex} eatSushi={this.eatSushi} eatenSushis={this.state.eatenSushis} />
        {/* Pass down current state of balance and the list of eatenSushis in state as props */}
        <Table balance={this.state.balance} eatenSushis={this.state.eatenSushis} />
      </div>
    );
  }
}

export default App;
