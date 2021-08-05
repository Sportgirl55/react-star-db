import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ItemList from '../ItemList';

import Row from '../Row';

import './PeoplePage.scss';

import ItemDetails from '../ItemDetails';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';


export default class PeoplePage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 11,
    hasError: false
  }


  onPersonSelected = (selectedPerson) => {
    this.setState({
      selectedPerson
    })
  }

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(i) => (
          `${i.name} (${i.birthYear})`
        )}

      </ItemList>
    );

    const itemDetails = (
      <ItemDetails itemId={this.state.selectedPerson} />
    )

    return (
      <ErrorBoundry>
        <Row left={itemList} right={itemDetails} />
      </ErrorBoundry>
    )
  }
}


