import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service'
import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';

import './RandomPlanet.scss';

export default class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 10000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  };

  swapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
    error: false
  }

  componentDidMount() {
    const {updateInterval} = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    })
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }


  updatePlanet = () => {
    const id = Math.floor(Math.random() * 18) + 2;
    // const id = 4567;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorMessage = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet rounded">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
}


const PlanetView = ({ planet }) => {
  const { id, name, population,
    rotationPeriod, diameter }
    = planet;
  return (
    <>
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt={name} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </>
  )
}