import React from "react"
// Import our array of painting objects as a variable called paintings
import paintings from "./data/paintings"
// Import our Painting class so we can render Painting components
import Painting from "./Painting"

// This class follows the React container component pattern - it is in charge of containing the data (in this case, the array of paintings), rendering each indiviudal Painting component and passing it a painting object as a prop
class PaintingsList extends React.Component {
  renderPaintings() {
    // Iterate through our array of paintings and for each one, render a Painting component, passing down the current painting object as a prop. We also give each Painting a unique key based on its id, so that React can identify each component individually when deciding whether or not it needs to update
    return paintings.map(painting =>
      <Painting key={painting.id} painting={painting}/>
    )
  }
  render(){
    return(
      <ul>
        { /* Call our renderPaintings function to render each Painting component  */ }
        {this.renderPaintings()}
      </ul>
    )
  }
}

// Export our class as a named export
export default PaintingsList
