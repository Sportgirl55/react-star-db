import React from "react";
import { WithSwapiService } from "../hoc-helpers";
import ItemDetails from "../ItemDetails";
import { Record } from "../ItemDetails/ItemDetails";


const PersonDetails = ({ itemId, swapiService }) => {
  const { getPerson, getPersonImage } = swapiService;
  return (
    <ItemDetails
      itemId={itemId}
      getData={getPerson}
      getImageUrl={getPersonImage}
    >
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

export default WithSwapiService(PersonDetails);
