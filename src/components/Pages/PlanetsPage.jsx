import React, { Component } from 'react';
import Row from '../Row';
import { PlanetList } from '../sw-components/ItemLists';
import PlanetDetails from '../sw-components/PlanetDetails';


export default class PlanetsPage extends Component {
  state = {
    selectedItem: null
  }

  onItemSelected = (selectedItem) => {
    this.setState({
      selectedItem
    })
  }

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={selectedItem} />}
      />
    )

  }
}

