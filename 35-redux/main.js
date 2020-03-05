// Grab elements from the DOM
const downButton = document.querySelector("#down");
const upButton = document.querySelector("#up");
const counterEl = document.querySelector("#counter-value");
const keyEl = document.querySelector("#key-value");

// Reducers take two arguments - the current version of state (or the specific piece of state they manage, if you are combining multiple reducers) and an action. They check the type of the action in order to determine how state should change and then return the new version of state
// This reducer takes the state of counter (0 by default). Depending on the action type, it will either increase or decrease that value by 1 and then return it as the new state of counter
const counterReducer = (state = 0, action) => {
  if (action.type === "COUNT_UP") {
    return state + 1
  } else if(action.type === "COUNT_DOWN") {
      return state - 1
    }
  return state
}

// This reducer takes the state of key ("press a key!" by default). As well as a type, the action object also contains a payload object containing the key that was pressed in order to trigger the event which called this reducer. The new state of key that is returned will be that key i.e. whichever key the user pressed
const keyReducer = (state = "press a key!", action) => {
  if(action.type === "KEY_PRESS") {
    return action.payload.key
  }
  return state
}

// The store is where all of our app's state lives. We pass createStore a reducer to manage how state should change. Here, we use combineReducers to create our store with two pieces of state - counter and key. We also link them with specific reducers so that the store knows that when the counterReducer is called, the piece of state it needs to be passed as an argument and that will be overwritten by its return value is counter. For keyReducer, the piece of state will be key
const store = Redux.createStore(Redux.combineReducers({
  counter: counterReducer,
  key: keyReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // Configure Chrome's Redux dev tools to use the store we've created

// Add click event listeners to our up and down buttons so that when they are clicked, they will dispatch a specific action to the store
upButton.addEventListener("click", () => {
  // dispatch is the method we use in order to change our state. When we dispatch an action to the store, it will try passing that action and the specific piece of state to every one of its reducers until it finds a matching type. In this case, it finds the action type "COUNT_UP" in the counterReducer, which it has passed the current state of counter. The counterReducer will then return a new version of that state that is one greater than it was before
  store.dispatch({ type: "COUNT_UP" })
})

downButton.addEventListener("click", () => {
  store.dispatch({ type: "COUNT_DOWN" })
})

// Add a keydown event listener to the document so that whenever a key is pressed, it dispatches an action to the store
document.addEventListener("keydown", e => {
  // Here, we send a payload object along with our action. We can do this if our reducer needs additional information in order to create the correct new version of state. In this case, the keyReducer needs to know what key was pressed in order to return the new state of key. We pass it that information by accessing the key of the event and passing it as part of the payload
  store.dispatch({ type: "KEY_PRESS", payload: { key: e.key } })
})

// Subscribe will call the function it is passed whenever state changes - here, we use it to update the DOM with the new state as soon as it is changed by one of our reducers
store.subscribe(() => {
  // Get the current version of state - this will be an object containing all the pieces of state in the store and their current values
  const state = store.getState()
  // Set the innerText of the counter and key elements to be the current state of counter and key. Because subscribe calls this function whenever state changes, it means we know that the DOM will always reflect whatever the current state of our app is
  counterEl.innerText = state.counter
  keyEl.innerText = state.key
})
