import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
// We can use connect to connect a component to our store
import { connect } from "react-redux"


const botsUrl = 'http://localhost:3000/bots'

// Fetch all of the bots from the server
const fetchBots = () => fetch(botsUrl).then(resp => resp.json())

class BotsPage extends React.Component {
  //start here with your code for step one

  componentDidMount() {
    fetchBots()
    // After fetching the bots, store them in state using a function in props called setProps. Rather than a parent passing down this prop to BotsPage, we will define it as part of Redux's mapDispatchToProps and it will be auotmatically passed to BotsPage when it is rendered, as BotsPage will be connected to the Redux store
      .then(bots => this.props.setBots(bots))
  }

  render() {
    // Rather than being passed this prop by its parent, we will have Redux get it from state and pass it as a prop when BotsPage is rendered, as it will be connected to the Redux store
    const selectedBot = this.props.selectedBot

    return (
      <div>
        <YourBotArmy />
        {/* Although BotCollection will need to receive the array of bots to render as a prop and BotsPage was responsible for obtaining that array from the server, BotsPage does not need to pass it down to BotCollection. Instead, we will have BotsPage dispatch that array of bots to the store to be stored in state and then BotCollection will simply access that piece of state from the store, setting it as one of its props when it is rendered */}
        {/* If we need to render BotSpecs, we pass down the selectedBot as a prop. We could also have BotSpecs set that prop itself by getting it from state, but as it is only one simple prop that we already need BotsPage to have, it is simpler to just pass it down the standard way. Managing your state and props in a hybrid combining the standard way of passing down props and using Redux to set them can be effective */}
        {
          selectedBot ? <BotSpecs bot={selectedBot} /> :
            <BotCollection  />
        }
      </div>
    );
  }

}

// Map state to props allows us to pass props to a component when it is rendered with values that come from state. When a component renders, this function is called and all of the state from the store is passed in as an argument
const mapStateToProps = state => {
  // The object we return will be this component's props
  return {
    // There will already be a piece of state called selectedBotId. We use that to find if there is a bot in the list of all of the bots in state with that id and if there is, store it in the selectedBod prop. Now, when BotsPage renders, it can use this prop to determine whether or not it needs to render BotCollection or BotSpecs and if it's the latter, to pass that selectedBod down to BotSpecs as a prop
    selectedBot: state.bots.find(bot => bot.id === state.selectedBotId)
  }
}

// Map dispatch to props allows us to set up functions to pass to this component as props. It takes the store's dispatch function as an argument. These functions will dispatch specific actions to the store depending on whether a specific event has been triggered or if a component reaches a specific phase in its lifecycle.
const mapDispatchToProps = dispatch => {
  // Here, we create a prop called setBots, which is a function that will take an array of bots and dispatch an action of type SET_BOTS to the store, including the array of bots in the payload. This will be called on componentDidMount. Dispatch will then call the reducer connected to the store and pass in this action. Our reducer will use the action type to decide how state needs to change - in this case, it will set the state of bots to be the array of boys it was sent as part of the payload, which will be the array of bots that BotsPage fetched from the server when it mounted
  return {
    setBots: bots => dispatch({ type: "SET_BOTS", payload: { bots }})
  }
}

// We use connect to connect a component to the store. We pass connect our mapStateToProps and mapDispatchToProps functions, so that it knows which props to pass our component when it renders and which ones need to come from which specific pieces of state
export default connect(mapStateToProps, mapDispatchToProps)(BotsPage);
