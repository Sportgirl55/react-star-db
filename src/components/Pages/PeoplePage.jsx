import React from 'react';
import Row from '../Row';

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


