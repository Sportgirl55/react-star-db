import React from "react";
import ItemList from "../ItemList/ItemList";
import { WithData } from "../hoc-helpers";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const { getAllPeople, getAllStarships, getAllPlanets } = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>{fn}</Wrapped>;
  };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ name, model }) => <span>{name} ({model})</span>;

const PersonList = WithData(
  withChildFunction(ItemList, renderName),
  getAllPeople
);
const PlanetList = WithData(
  withChildFunction(ItemList, renderName),
  getAllPlanets
);
const StarshipList = WithData(
  withChildFunction(ItemList, renderModelAndName),
  getAllStarships
);

export { PersonList, PlanetList, StarshipList };
