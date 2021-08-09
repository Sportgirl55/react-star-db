import React, { Component } from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../SwapiServiceContext';
import './App.scss';
import { PeoplePage, PlanetsPage, StarshipsPage } from "../Pages";


export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="app">
            <Header />
            <RandomPlanet />
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}
