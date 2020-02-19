import React from 'react'
import './App.css'
import Button from "./components/Button"
import Form from "./components/Form"

class App extends React.Component {
  constructor() {
    // You must call super in your consturctor in order to inherit behaviour set up in the React.Component class' constructor
    super()
    // Create a state object, setting the initial state for this component. Only container components such as this one, which are in charge of rendering other components and passing them props, should contain state
    this.state = {
      on: true,
      name: null,
      age: null
    }
  }

  handleClick = () => {
    // When the Button is clicked, we change its state - we use setState (an asychronous function) rather than directly changing it so that the render method will be called afterward and the component will be rerendered with the new state
    this.setState({
      // Use ! to flip the current boolean value of on and set that as the new value i.e. if on is true, it will now become false; if on is false, it will become true
      on: !this.state.on
    })
  }

  handleChange = (e) => {
    this.setState({
      // Target the key in state we need to change by accessing it via the name of the input field, which will be the same i.e. if the input field with the name of age has changed, we will change the value of the age key in state. The value we change it to is the current value of that input field e.g. age in state will become whatever the user has typed into the age field
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // Clear the form's input fields
    e.target.reset()
    // We could now send the state to a server in order to persist the person the user has just created in the form - for now we'll just log the information out
    console.log(this.state)
  }

  render(){
    return (
      <div className="App">
        <h1>State - with Forms and Events</h1>
        { /* Pass down the click event listener function and the value of the on key in state to Button as props so that it knows whether to display ON or OFF and has a way of changing that in its parent's state */ }
        <Button handleClick={this.handleClick} on={this.state.on} />
        { /* Pass down the change and submit event listener functions to Form as props */ }
        <h2>Create a person</h2>
        <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    )
  }
}

export default App
