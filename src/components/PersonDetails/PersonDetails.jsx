import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
//  import ErrorIndicator from '../ErrorIndicator';
//  import Spinner from '../Spinner';

import './PersonDetails.scss';

export default class PersonDetails extends Component {
  swapiService = new SwapiService();
  state = {
    person: null
    // item: null,
    // image: null,
    // loading: false,
    // error: false
  }

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson()
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({person})
      })

    // getData(itemId)
    //   .then((item) => {
    //     this.setState({
    //       item,
    //       image: getImageUrl(item)
    //     });
    //   });
  }

  render() {
    const { person } = this.state;
    if (!person) {
      return <span>Select an item from the list</span>
    }

    const { id, name, gender, birthYear, eyeColor } = person;


    // const hasData = !(loading || error);
    // const errorMessage = error ? <ErrorIndicator /> : null;
    // const spinner = loading ? <Spinner /> : null;
    // const content = hasData ? <PersonView item={item} /> : null;

    return (
       <div className="person-details card">
         <img className="person-image"
              src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
              alt="character"/>

          <div className="card-body">

           <h4>{name}</h4>
           <ul className="list-group list-group-flush">

             <li className="list-group-item">
               <span className="term">Gender</span>
               <span>{gender}</span>
             </li>
             <li className="list-group-item">
             <span className="term">Birth Year</span>
               <span>{birthYear}</span>
             </li>
             <li className="list-group-item">
               <span className="term">Eye Color</span>
               <span>{eyeColor}</span>
             </li>
           </ul>
         </div>
          {/* {errorMessage}
         {spinner}
         {content}  */}
      </div>
    )
  }
}

