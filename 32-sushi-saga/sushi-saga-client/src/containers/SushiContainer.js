import React, { Fragment } from 'react'
import Sushi from "../components/Sushi"
import MoreButton from '../components/MoreButton'

const SushiContainer = ({ sushis, increaseSushiIndex, eatSushi, eatenSushis }) => {

  const renderSushis = () => {
    // Map the array of sushi objects pass down as a prop to an array of Sushi components, passing each of the sushi's attributes as props. Also include the eatSushi function which we will call when a user clicks that sushi. Check whether this sushi's id is already in the list of eatenSushis passed down as props in order to determine whether the eaten prop should be true or false
    return sushis.map(sushi => <Sushi name={sushi.name} price={sushi.price} img_url={sushi.img_url} id={sushi.id} eaten={eatenSushis.includes(sushi.id)} eatSushi={eatSushi} />)
  }

  return (
    <Fragment>
      <div className="belt">
        {renderSushis()}
        { /* Pass down the function to increase the state of sushiIndex evne further down the component tree as a prop  */}
        <MoreButton increaseSushiIndex={increaseSushiIndex} />
      </div>
    </Fragment>
  )
}

export default SushiContainer
