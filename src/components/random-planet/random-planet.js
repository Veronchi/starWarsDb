import React, { Component } from "react";

import './random-planet.css';

export default class RandomPlanet extends Component {

  state = {
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
  };

  render() {
    return (
      <div className='random-planet text-white bg-dark mb-3'>
        <img className='planet-image' src='https://starwars-visualguide.com/assets/img/planets/5.jpg' alt='planet' />
        <div className='planet-info'>
          <h2 className='planet-name'>Planet Name</h2>
          <ul className='planet-info-list list-group-flush'>
            <li className='list-group-item'>
              <span className='term'>Population</span>
              <span>1232</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Rotation Period</span>
              <span>111</span>
            </li>
            <li className='list-group-item'>
              <span className='term'>Diameter</span>
              <span>1</span>
            </li>
          </ul>
        </div>
      </div>
    );
  };

}
