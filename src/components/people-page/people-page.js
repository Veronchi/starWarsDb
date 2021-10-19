import React, { Component } from "react";

import './people-page.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details";
import ErrorIndicator from "../error-indicator/error-indicator";
import SwapiService from "../../services/swapi-service";
import RowContainer from "../row-container/row-container";


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

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) => `${name} (${gender}, ${birthYear})`} />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <RowContainer left={itemList} right={personDetails} />
    );
  };
}