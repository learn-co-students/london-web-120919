import React, { Component } from 'react'

class Timer extends Component {
  constructor() {
    super()
    // Set the initial state of number
    this.state = {
      number: 0
    }
  }

  // When this component mounts, create a timer which will increment the state of number by one every second
  componentDidMount() {
    this.setState({
      timer: setInterval(this.incrementNumber, 1000)
    })
  }
  
  incrementNumber = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  // When this component unmounts, we clear the interval stored in state which increments the state of number by one every second
  componentWillUnmount() {
    clearInterval(this.state.timer)
  }

  render () {
    return (
      <div className="app-children">
        <h2 id="digital">
          {/* Render the current state of number */}
          {this.state.number}
        </h2>
      </div>
    )
  }
}

export default Timer
