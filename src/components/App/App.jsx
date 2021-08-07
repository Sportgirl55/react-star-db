import React, { Component } from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import SwapiService from '../../services/swapi-service'
import './App.scss';


import {
  PersonList,
  PlanetList,
  StarshipList
} from "../sw-components/ItemLists";

import {
  PersonDetails,
  PlanetDetails,
  StarshipDetails,
} from "../sw-components/Details";


export default class App extends Component {
  swapiService = new SwapiService();
  // state = {
  //   selectedPerson: 5,
  // };

  render() {
    return (
      <ErrorBoundry>
        <div className="app">
          <Header />
          <RandomPlanet />

          <PersonDetails itemId={11} />
          <PlanetDetails itemId={5} />
          <StarshipDetails itemId={9} />
 
          <div className="app-wrap">
            <div className="col-md-6">
              <PersonList />
            </div>
          </div>
          <div className="app-wrap">
            <div className="col-md-6">
              <PlanetList />
            </div>
          </div>
          <div className="app-wrap">
            <div className="col-md-6">
              <StarshipList />
            </div>
          </div>
        </div>
      </ErrorBoundry>
    )
  }
}
