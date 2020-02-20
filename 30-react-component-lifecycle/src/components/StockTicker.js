import React, { Component } from 'react'

class StockTicker extends Component {
  constructor() {
    super()
    this.state = {
      price: 10,
      id: "higher"
    }
  }

  // When this component mounts, create a timer which will set the state of price to a random number between 10 and 100 every second
  componentDidMount() {
    this.setState({
      timer: setInterval(this.generatePrice, 1000)
    })
  }

  generatePrice = () => {
    this.setState({
      price: parseInt(Math.random().toFixed(2) * 100)
    })
  }

  // When this component unmounts, we clear the interval stored in state which sets a new price every second
  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  // When this component's state is updated and it needs to render again, we can use componentDidUpdate to check what its previous props and state were compared to its current props and state by setting up previousProps and previousState as parameters
  componentDidUpdate(previousProps, previousState) {
    // Check if the new state of price is higher than the previous state of price. If it is, set the state of id to be higher, which has a background-color of green. If it is lower than the previous state of price, set it to lower, which has a background-color of red
    if (this.state.price > previousState.price) {
      this.setState({id: "higher"})
    } else if (this.state.price < previousState.price) {
      this.setState({id: "lower"})
    }
    // We have to explicitly check both possibilities rather than doing just an if/else, as we only want to call setState if the price has gone up or down, not if it has stayed the same. Otherwise, we will be stuck in a recursive loop of calling setState - which is being called in order to change the price, which will in turn call componentDidUpdate, which will call setState to change the id, which will call componentDidUpdate again, which will end up calling setState again and so on and so on. If the state of price has gone up, we'll set the state of id to higher, if it's gone down, we'll set the state of id to lower, otherwise (i.e. if it hasn't changed) we won't call setState again
  }

  render () {
    return (
      <div className="app-children">
        <div id="ticker">
          <h2>Flatiron</h2>
          <div id={this.state.id}>
            {this.state.price}
          </div>
        </div>
      </div>
    )
  }
}

export default StockTicker
