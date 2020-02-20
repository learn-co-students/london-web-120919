import React, { Component } from 'react'

class Dog extends Component {

  render () {
    const { dogImg } = this.props
    return (
      <div className="app-children">
        <h1>Here's a Cute Dog!</h1>
        <img src={dogImg} />
      </div>
    )
  }
}

export default Dog
