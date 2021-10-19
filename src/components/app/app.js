import React, { Component } from "react";

import './app.css';
import SwapiService from "../../services/swapi-service";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details";
import ToggleBtn from "../toggle-btn/toggle-btn";
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page";



export default class App extends Component {

  swapiService = new SwapiService();

  state = {
    randomPlanetVisibility: true,
    hasError: false
  };

  onToggle = () => {
    this.setState(({ randomPlanetVisibility }) => {
      const newStateValue = !randomPlanetVisibility;

      return { randomPlanetVisibility: newStateValue }
    });
  };

  static getDerivedStateFromError(error) {
    this.setState({ hasError: true });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const { randomPlanetVisibility } = this.state;
    const randomPlanet = randomPlanetVisibility ? <RandomPlanet /> : null;

    return (
      <div className='container'>
        <Header />
        {randomPlanet}
        <ToggleBtn onToggle={this.onToggle} />

        <PeoplePage />

        {/* <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={(item) => item.name} />
          </div>
          <div className='col-md-6'>
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
              renderItem={(item) => item.name} />
          </div>
          <div className='col-md-6'>
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div> */}
      </div>
    )
  }
};
