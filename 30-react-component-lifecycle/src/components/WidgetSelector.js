import React, { Component } from 'react'
import Timer from './Timer'
import StockTicker from './StockTicker'

class WidgetSelector extends Component {

  render () {
    const { selectedWidget, handleClick } = this.props
    return (
      <div className="app-children">
        <h1>Clocks & Stocks</h1>
        { /* Decide which widget to render depending on the state of selectedWidget */}
        { selectedWidget === "timer" ? <Timer /> : <StockTicker /> }
        { /* Add a click event listener passed down by App to allow the user to switch which widget is rendered */}
        <button onClick={handleClick}>Switch Widget</button>
      </div>
    )
  }
}

export default WidgetSelector
