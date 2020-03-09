// Set up the initial state for our app. The first time our reducer is called (by one of Redux's @@INIT actions), this state will be passed in as the default argument
const initialState = {
  bots: [],
  botArmyIds: [],
  selectedBotId: null
}

// Every time we dispatch an action to the store, it will go through this reducer, which will decide how to change state based on the type of the action and use the payload when applicable to change state accordingly. We could also split this into multiple reducers for each individual piece of state and pass them - and the name of the piece of state they will be changing - to combineReducers when we create the store
const reducer = (state = initialState, action) => {
  // We check the type of the action object we've been sent in order to decide what the new version of state will look like i.e. what needs to change
  if (action.type === "SET_BOTS") {
    return {
      // Every option will use the spread operator to return all of state as it currently is and then a new value for the specific piece of state we are changing i.e. we will return a new version of state where everything is the same except for the one thing that needed to change
      ...state,
      // Set the state of bots to be whatever was includeed in the payload of the action. In this case, it will be an array of bots fetched from the server when the BotsPage component mounted
      bots: action.payload.bots
    }
  }
  else if (action.type === "SELECT_BOT") {
    return {
      ...state,
      // Set the state of selectedBotId to be the id of the bot included in the payload so that BotsPage will know which BotSpecs to render
      selectedBotId: action.payload.bot.id
    }
  }
  else if (action.type === "CLEAR_SELECTED_BOT") {
    return {
      ...state,
      // Set the state of selectedBotId to be null so that BotsPage will know to render the entire BotCollection instead
      selectedBotId: null
    }
  }
  else if (action.type === "ENLIST_BOT") {
    return {
      ...state,
      // Enlist a bot into our army by using the spread operator to set the state of botArmyIds to a new array containing every id currently in botArmyIds plus the id of the bot sent as part of the payload i.e. add that bot's id to botArmyIds
      botArmyIds: [...state.botArmyIds, action.payload.bot.id]
    }
  }
  else if (action.type === "DELIST_BOT") {
    return {
      ...state,
      // Delist a bot from our army by setting the state of botArmyIds to be a filtered version of the current list of ids - selecting only the ones that aren't the same as the id of the bot sent as part of the payload i.e. remove that bot's id from the list of botArmyIds
      botArmyIds: state.botArmyIds.filter(id => id !== action.payload.bot.id)
    }
  }
  return {
    // By default, if an action is dispatched that doesn't match any of our defined types, just return state as it currently is
    ...state
  }
}


export default reducer
