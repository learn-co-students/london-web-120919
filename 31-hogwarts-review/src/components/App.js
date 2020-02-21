import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import HogList from "../containers/HogList"
import hogs from "../porkers_data";

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      greasedFilter: false,
      sortByName: true
    }
  }

  // Flip the state of greasedFilter so that we know whether to render all the hogs or just the greased ones
  toggleGreasedFilter = () => {
    this.setState({
      greasedFilter: !this.state.greasedFilter
    })
  }

  // Flip the state of sortByName so that we know whether to sort the hogs by name or weight
  toggleSortByName = () => {
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  // Select only the hogs that are greased
  filterGreasedHogs() {
    return hogs.filter(hog => hog.greased)
  }

  // Sort the hogs we've been given by the property we've been given - either name or weight
  sortHogs(hogsToSort, property) {
    return hogsToSort.sort((a, b) => a[property]> b[property] ? 1 : -1)
  }

  render() {
    // First, use the state of greasedFilter to check whether we need to render all of the hogs or only the greased hogs
    let hogsToRender = this.state.greasedFilter ? this.filterGreasedHogs() : hogs

    // Then, use the state of sortByName to check whether we should sort that list of hogs by name or weight
    hogsToRender = this.state.sortByName ? this.sortHogs(hogsToRender, "name") : this.sortHogs(hogsToRender, "weight")

    return (
      <div className="App">
        <Nav />
        { /* Add a click event to this button that will flip the state of greasedFilter, triggering a rerender. The text of the button will change depending on the current state of greasedFilter */}
        <button onClick={this.toggleGreasedFilter}>{ this.state.greasedFilter ? "Show All Hogs" : "Show Only Greased Hogs"}</button>
        { /* Add a click event to this button that will flip the state of sortByName, triggering a rerender. The text of the button will change depending on the current state of sortByName */}
        <button onClick={this.toggleSortByName}>{ this.state.sortByName ? "Sort Hogs by Weight" : "Sort Hogs by Name"}</button>
        {/* Pass down the array of hog objects that HogList needs to render - we've already decided whether this needs to be a filtered list and whether it's sorted by name or age, so HogList only has to worry about rendering whatever it's given */}
        <HogList hogs={hogsToRender} />
      </div>
    );
  }
}

export default App;
