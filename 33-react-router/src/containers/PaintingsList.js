import React from "react"
import Painting from "../components/Painting"
import { Link } from "react-router-dom"


const PaintingsList = ({paintings}) => {
  const renderPaintings = () => {
    return paintings.map(painting =>
      // Wrap the Painting component in a Link that goes to the route for that painting's show route
      <Link to={`/paintings/${painting.id}`}><Painting key={painting.id} title={painting.title} image={painting.image}/></Link>
    )
  }

  return(
    <ul>
      {renderPaintings()}
    </ul>
  )
}

// Export our class as a named export
export default PaintingsList
