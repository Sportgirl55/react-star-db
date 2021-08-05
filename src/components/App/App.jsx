import React, { Component } from "react";
import Header from "../Header";
import RandomPlanet from "../RandomPlanet";

import SwapiService from '../../services/swapi-service'
import './App.scss';

import ItemDetails from "../ItemDetails";


import Row from "../Row";
import { Record } from "../ItemDetails/ItemDetails";

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    selectedPerson: 5,

  };


  render() {

    const { getPerson, getStarship, getPlanet, getPersonImage, getStarshipImage, getPlanetImage } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}>

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage} >

        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />

      </ItemDetails>
    );

    const planetDetails = (
      <ItemDetails
        itemId={3}
        getData={getPlanet}
        getImageUrl={getPlanetImage}
      />
    );

    return (
      <div className="app">
        <Header />
        <RandomPlanet />
        <Row left={personDetails}
          right={starshipDetails} />
        {/* {planetDetails} */}

        {/* <PeoplePage /> */}
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
