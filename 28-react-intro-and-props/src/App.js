import React from 'react'
// Import our PaintingsList class, so that we can render an instance of it
import PaintingsList from './PaintingsList'

import './App.css'

// As well as building out a full class for a component with a render method, we also have the option of simply creating a function with returns some JSX - this is called a functional component
function App () {
  return (
    <div >
      <h1>Welcome to my React App!</h1>
      { /* Render our PaintingsList component, which in turn will render a Painting component for every painting object in our array */ }
      <PaintingsList />
    </div>
  )
}

// Export our class as a named export so that we can render an instance of it in index.js
export default App
