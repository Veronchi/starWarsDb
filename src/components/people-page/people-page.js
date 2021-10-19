import React, { Component } from "react";

import './people-page.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import RowContainer from "../row-container/row-container";
import ErrorBoundary from "../error-boundry/error-boundry";


export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null    
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  

  render() {
    console.log(this.props.getData)

    if (this.state.hasError) {
      return <ErrorIndicator />
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>
        {(i) => (`${i.name} (${i.birthYear})`)}
      </ItemList>
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <ErrorBoundary>
        <RowContainer left={itemList} right={personDetails} />
      </ErrorBoundary>
    );
  };
}