import React from 'react'

const MoreButton = ({increaseSushiIndex}) => {
    // Listen for a click event that will call the function passed down as a prop to increase the state of sushiIndex, triggering a rerender for the next 4 sushis
    return <button onClick={increaseSushiIndex}>
            More sushi!
          </button>
}

export default MoreButton
