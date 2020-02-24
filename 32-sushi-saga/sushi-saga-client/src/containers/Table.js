import React, { Fragment } from 'react'

const Table = ({ eatenSushis, balance }) => {

  // Map an array of eatenSushis ids to an array of empty plate divs, so that for every sushi eaten there will be another empty plate on the table
  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    // If we want to render multiple elements, but don't want to have to create a div purely to wrap them in, we can wrap them in an instance of React's Fragment component
    <Fragment>
      <h1 className="remaining">
        {/* Render the current state of balance */}
        You have: ${balance} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /*
               renderPlates takes an array
               and renders an empty plate
               for every element in the array. We pass it the array of eatenSushis from state, so that it renders an empty plate for every sushi that's been eaten.
            */
            renderPlates(eatenSushis)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table
