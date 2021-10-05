import React, { Component } from "react";
import SwapiService from '../../services/swapi-service'

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    name: null,
    id: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 25)+ 2;
    this.swapiService
      .getPlanet(id)
      .then((planet) => {
        this.setState({
          id,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter,
        });
      });
  };

  render() {
    const {name, id, population, rotationPeriod, diameter} = this.state;

    return (
      <div className='random-planet text-white bg-dark mb-3'>
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
      </div>
    );
  };

}
