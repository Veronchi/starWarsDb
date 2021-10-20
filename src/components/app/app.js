import React, { Component } from "react";

import './app.css';
import SwapiService from "../../services/swapi-service";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import ItemList from "../item-list/item-list";
import ItemDetails from "../item-details";
import ToggleBtn from "../toggle-btn/toggle-btn";
import ErrorIndicator from "../error-indicator/error-indicator";
import PeoplePage from "../people-page";
import RowContainer from "../row-container/row-container";
import ErrorBoundary from "../error-boundry/error-boundry";



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

    const { getPerson, getStarship, getPersonImg, getStarshipImg } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImgUrl={getPersonImg} />
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImgUrl={getStarshipImg} />
    );

    return (
      <ErrorBoundary>
        <div className='container'>
          <Header />
          {/* {randomPlanet}
          <ToggleBtn onToggle={this.onToggle} /> */}

          {/* <PeoplePage /> */}

          <RowContainer left={personDetails} right={starshipDetails} />

        </div>
      </ErrorBoundary>
    )
  }
};
