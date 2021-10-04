import React, { Component } from "react";

import './person-details.css'

export default class PersonDetails extends Component {
  render() {
    return (
      <div className='person-details card'>
        <img className='person-img' src='https://starwars-visualguide.com/assets/img/characters/3.jpg' alt='character' />
        <div className='card-body'>
          <h3 className='person-name'>Planet Name</h3>
          <ul className='person-info-list'>
            <li className='person-info-item'>1</li>
            <li className='person-info-item'>2</li>
            <li className='person-info-item'>3</li>
          </ul>
        </div>
      </div>
    );
  };
}