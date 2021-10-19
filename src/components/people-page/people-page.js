import React, { Component } from "react";

import './people-page.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  static getDerivedStateFromError(error) {
    this.setState({ hasError: true });
  };

  render() {
    console.log(this.props.getData)

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className='row mb2'>
        <div className='col-md-6'>
          <ItemList onItemSelected={this.onPersonSelected} 
          getData={this.swapiService.getAllPeople}
          renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}/>
        </div>
        <div className='col-md-6'>
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  };
}