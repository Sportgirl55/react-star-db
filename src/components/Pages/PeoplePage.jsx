import React from 'react';
import { withRouter } from 'react-router-dom';
import Row from '../Row';

import './PeoplePage.scss';

import { PersonList } from '../sw-components/ItemLists';
import PersonDetails from '../sw-components/PersonDetails';


const PeoplePage = ({ history, match }) => {
  const { id } = match.params;
  return (
    <Row
      left={<PersonList onItemSelected={(id) => history.push(id)} />}
      right={<PersonDetails itemId={id} />}
    />
  )
}

export default PeoplePage;


