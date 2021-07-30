import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
//import ErrorBoundry from '../ErrorBoundry';
import ItemList from '../ItemList';

import Row from '../Row';

import './PeoplePage.scss';
//import ItemDetails from '../PersonDetails';
import ErrorIndicator from '../ErrorIndicator';
import PersonDetails from '../PersonDetails';


export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 11,
    hasError: false
  }

  componentDidCatch(error, info) {

    this.setState({
      hasError: true
    });
  }

  onPersonSelected = (selectedPerson) => {
    this.setState({
      selectedPerson
    })
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) => (
          `${name} (${gender}, ${birthYear})`)} />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    )

    return (
      <Row left={itemList} right={personDetails} />
    )
  }
}


