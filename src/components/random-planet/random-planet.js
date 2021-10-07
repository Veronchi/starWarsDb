import React, { Component } from "react";
import SwapiService from '../../services/swapi-service'
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  };

  onError = () => {

  }

  updatePlanet() {
    // const id = Math.floor(Math.random() * 25) + 2;
    const id = 25000;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PlanetView planet={planet} /> : null;


    return (
      <div className='random-planet text-white bg-dark mb-3'>
        {spinner}
        {content}
      </div>
    );
  };

};

const PlanetView = ({ planet }) => {
  const { name, id, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <img className='planet-image' src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='planet' />
      <div className='planet-info'>
        <h2 className='planet-name'>{name}</h2>
        <ul className='planet-info-list list-group-flush'>
          <li className='list-group-item'>
            <span className='term'>Population</span>
            <span>{population}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className='list-group-item'>
            <span className='term'>Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};