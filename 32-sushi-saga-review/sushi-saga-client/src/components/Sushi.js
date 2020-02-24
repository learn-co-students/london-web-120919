import React, { Fragment, useState } from 'react'

const Sushi = ({ name, price, img_url, id, eatSushi, eaten}) => {
  return (
    <div className="sushi">
      { /* Listen for a click event that will call the function to add this sushi's id to the list of eatenSushis in state */ }
      <div className="plate"
           onClick={() => eatSushi(id, price)}>
        {
          /* Check the value of the eaten prop (Which we determined based on whether or not this sushi's id is in the list of eatenSushis in state) in order to determine whether to render an image for this sushi or not */
          eaten ?
            null
          :
            <img src={img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        { /* Render this sushi's name and price */ }
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi
