import React, { Component } from "react";

import './app.css';
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details";
import ToggleBtn from "../toggle-btn/toggle-btn";


export default class App extends Component {
  state = {
    randomPlanetVisibility: true,
    selectedPerson: null
  };

  onToggle = () => {
    this.setState(({ randomPlanetVisibility }) => {
      const newStateValue = !randomPlanetVisibility;

      return { randomPlanetVisibility: newStateValue }
    });
  };
  
  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const {randomPlanetVisibility} = this.state;
    const randomPlanet = randomPlanetVisibility ? <RandomPlanet /> : null;

    return (
      <div className='container'>
        <Header />
        {randomPlanet}
        <ToggleBtn onToggle={this.onToggle} />
        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>
          <div className='col-md-6'>
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    )
  }
};
