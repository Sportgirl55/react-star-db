import React from "react";
import { WithSwapiService } from "../hoc-helpers";
import ItemDetails from "../ItemDetails";
import { Record } from "../ItemDetails/ItemDetails";


const PersonDetails = (props) => {
  return (
    <ItemDetails  {...props}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPerson,
    getImageUrl: swapiService.getPersonImage
  }
}

export default WithSwapiService(PersonDetails, mapMethodsToProps);
