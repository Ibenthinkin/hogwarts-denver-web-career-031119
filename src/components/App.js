import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Container from './Container'

class App extends Component {

  state = {
    pigs: hogs,
    filtered: false
  }

  sortByName = () => {
    const pigs = this.state.pigs.sort((a,b) => {
      if (a.name < b.name){
        return -1
    } if (a.name > b.name){
        return 1
    }
        return 0
    })
    this.setState({pigs})
  }

    sortByWeight = () => {
      const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
      const pigs = this.state.pigs.sort((a,b) => a[weight] - b[weight])
      this.setState({pigs})
    }

    filterGreased = () => {
      const pigs = this.state.pigs.filter(pig => pig.greased)
        this.state.filtered ? this.setState({filtered: false, pigs: hogs}) : this.setState({filtered: true, pigs:pigs})
    }


  render() {
    return (
      <div className="App">
          < Nav sortByName={this.sortByName} sortByWeight={this.sortByWeight} filterGreased={this.filterGreased}/>
          <Container pigs={this.state.pigs} />
      </div>
    )
  }
}

export default App;
