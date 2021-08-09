import React from "react";
import { WithSwapiService } from "../hoc-helpers";
import ItemDetails from "../ItemDetails";
import { Record } from "../ItemDetails/ItemDetails";


const StarshipDetails = (props) => {
  return (
    <ItemDetails {...props}  >
      <Record field="model" label="Model" />
      <Record field="length" label="Length" />
      <Record field="costInCredits" label="Cost" />
    </ItemDetails>
  );
};

const mapMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getStarship,
    getImageUrl: swapiService.getStarshipImage,
  };
};

export default WithSwapiService(mapMethodsToProps)(StarshipDetails);
