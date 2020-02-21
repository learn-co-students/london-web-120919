import React from "react"


class Hog extends React.Component {

  constructor(props) {
    super()
    this.state = {
      selected: false
    }
  }

  // Flip the state of selected in order to determine whether we should render all of a hog's details or not
  toggleHogDetails = () => {
    this.setState({
      selected: !this.state.selected
    })
  }

  // Render only a hog's name and img, with a button that will let us flip the state of selected in order to trigger a rerender with the rest of the details
  renderSimpleHog(name, img) {
    return(
      <div onClick={this.toggleHogDetails}>
        <h1>{name}</h1>
        <img src={img}/>
      </div>
    )
  }

  // Render all of a hog's details, with a button that will let us flip the state of selected in order to trigger a rerender with only the name and img
  renderAllHogDetails(name, img, specialty, weight, highestMedal) {
    return(
      <div onClick={this.toggleHogDetails}>
        <h1>{name}</h1>
        <img src={img}/>
        <p>Specialty: {specialty}</p>
        <p>Weight: {weight}</p>
        <p>Highest Medal Achieved: {highestMedal}</p>
      </div>
    )
  }

  render(){
    const { name, img, specialty, weight, highestMedal } = this.props
    // Check the state of selected in order to determine whether we should render all of this hog's details, or only its name and img
    return this.state.selected ? this.renderAllHogDetails(name, img, specialty, weight, highestMedal) : this.renderSimpleHog(name, img)
  }
}

export default Hog
