import React from "react"
import Painting from "../components/Painting"

class PaintingContainer extends React.Component {
  // Set up initial state
  constructor() {
    super()
    this.state = {
      painting: null
    }
  }

  // When the component mounts, fetch the selected painting by looking at the value of the id in params, which is stored inside the match object that the Router passed us as part of props
  componentDidMount() {
    fetch(`http://localhost:3000/paintings/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => this.setState({
        painting: data
      }))
  }

  render(){
    // We don't want to render the Painting component until after we've fetched the relevant painting object and stored it in state, so if it isn't in state yet, we render a loading message
    return this.state.painting ? <Painting title={this.state.painting.title} image={this.state.painting.image} date={this.state.painting.date} artist_name={this.state.painting.artist.name}/> : <h1>LOADING...</h1>
  }
}

// Export our class as a named export
export default PaintingContainer
