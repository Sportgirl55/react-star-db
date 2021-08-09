import React from "react";
import { WithSwapiService } from "../hoc-helpers";
import ItemDetails from "../ItemDetails";
import { Record } from "../ItemDetails/ItemDetails";


const PlanetDetails = (props) => {
  return (
    <ItemDetails {...props}    >
      <Record field="population" label="Population" />
      <Record field="rotationPeriod" label="Rotation Period" />
      <Record field="diameter" label="Diameter" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  }
}

export default WithSwapiService (PlanetDetails, mapMethodsToProps);
