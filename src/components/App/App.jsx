import React, { Component } from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import SwapiService from '../../services/swapi-service';
import { SwapiServiceProvider } from '../SwapiServiceContext';
import './App.scss';
import { PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage } from "../Pages";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StarshipDetails from "../sw-components/StarshipDetails";


export default class App extends Component {

  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="app">
              <Header />
              <RandomPlanet />

              <Switch>

                <Route path="/" exact render={() => <h2>Welcome to StarDB</h2>} />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" exact component={StarshipsPage} />

                <Route path="/starships/:id"
                  render={({ match, location, history }) => {
                    const { id } = match.params;
                    return <StarshipDetails itemId={id} />
                  }}
                />

                <Route path="/login"
                  render={() => (
                    <LoginPage
                      isLoggedIn={isLoggedIn}
                      onLogin={this.onLogin} />
                  )} />
                <Route path="/secret"
                  render={() => (
                    <SecretPage isLoggedIn={isLoggedIn} />
                  )} />
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>

            </div>
          </Router>

        </SwapiServiceProvider>
      </ErrorBoundry>
    )
  }
}
