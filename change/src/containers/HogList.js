import React, { Component } from "react";
import Hog from "../components/Hog"

// A container component - this has been passed the array of hog objects as props, which it will use to render each individual Hog component
class HogList extends Component {

  // Get the file path to a specific hog's image by going into hog-imgs and then turning the hog's name into lower case, joining every individual word with an undescore and then concatenating .jpg on the end e.g. Piggy smalls becomes hog-imgs/piggy_smalls.jpg
  getImg(hog) {
    return `hog-imgs/${hog.name.toLowerCase().split(" ").join("_")}.jpg`
  }

  // For each hog object in the array passed down as a prop, render a Hog component and pass down that hog's details as props
  renderHogs() {
    return this.props.hogs.map(hog => <Hog
       name={hog.name} img={this.getImg(hog)} specialty={hog.specialty} weight={hog.weight} highestMedal={hog["highest medal achieved"]} key={hog.id} />)
  }

  render() {
    return (
      <div>
        { /* Render all of the Hog components based on the current version of the hogs prop passed down by App */}
        {this.renderHogs()}
      </div>
    );
  }
}

export default HogList;
