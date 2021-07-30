import React, { Component } from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";

import SwapiService from '../../services/swapi-service'
import './App.scss';
//import ErrorIndicator from "../ErrorIndicator";
import PeoplePage from "../PeoplePage";
//import ItemList from "../ItemList";
//import PersonDetails from "../PersonDetails";
//import ErrorBoundry from "../ErrorBoundry";
//import Row from "../Row";

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 5,

  };


  render() {

    //const { getPerson, getStarship, getPersonImage, getStarshipImage } = this.swapiService;

    // const personDetails = (
    //   <ItemDetails
    //     itemId={11}
    //      getData={getPerson}
    //      //getImageUrl={getPersonImage}
    //     >
    //   </ItemDetails>
    // );

    // const starshipDetails = (
    //   <ItemDetails
    //     itemId={5}
    //      getData={getStarship}
    //     // getImageUrl={getStarshipImage}
    //     >
    //   </ItemDetails>
    // );

    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        {/* <Row left={personDetails}
            right={starshipDetails} /> */}

        <PeoplePage />
        {/* <div className="app-wrap">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
              renderItem={(item) => 
                (<span>{item.name} <button>!!!</button></span>)
               } />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
        <div className="app-wrap">
          <div className="col-md-6">
            <ItemList
              onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
             renderItem={(item) => item.name}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>   */}
      </div>
    )
  }
}
