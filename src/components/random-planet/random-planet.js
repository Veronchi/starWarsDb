import React, { Component } from "react";

import './random-planet.css';

export default class RandomPlanet extends Component {

  render() {
    return (
      <div className='random-planet text-white bg-dark mb-3'>
        <img className='planet-image' src='https://starwars-visualguide.com/assets/img/planets/5.jpg' alt='planet' />
        <div className='planet-info'>
          <h2 className='planet-name'>Planet Name</h2>
          <ul className='planet-info-list'>
            <li className='planet-info-item'>1</li>
            <li className='planet-info-item'>2</li>
            <li className='planet-info-item'>3</li>
          </ul>
        </div>
      </div>
    );
  }

}
