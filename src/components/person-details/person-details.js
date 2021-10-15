import React, { Component } from "react";

import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner/spinner";
import './person-details.css'

export default class PersonDetails extends Component {
  swapiServise = new SwapiService();

  state = {
    person: {},
    loading: true,
    error: false,
  };

  componentDidMount() {
    this.updatePerson();
  };

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePerson() {
    const { personId } = this.props;

    if (!personId) {
      return;
    }

    this.swapiServise
      .getPerson(personId)
      .then((person) => {
        this.setState({
          person,
          loading: false
        });
      })
      .catch(this.onError);
  };

  render() {

    if (!this.state.person) {
      return <span>Select a person from a list</span>
    }

    const { person, error, loading } = this.state;


    const hasDate = !(loading || error);
    const content = hasDate ? <PersonView person={person} /> : null;
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;

    return (
      <div className='person-details card'>
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  };
}

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;

  return (
    <React.Fragment>
      <img className='person-img' src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt='character' />
      <div className='card-body'>
        <h3 className='person-name'>{name}</h3>
        <ul className='person-info-list'>
          <li className='person-info-item'>
            <span>Gender</span>
            <span>{gender}</span>
          </li>
          <li className='person-info-item'>
            <span>Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className='person-info-item'>
            <span>Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}