import React from "react";
import { truncateString, getNumberOfWords } from "../utils/stringUtils";

const BeerCard = ({ beer }) => {
  const divStyle = {
    backgroundImage: "url(" + beer.image_url + ")",
    backgroundSize: "contain",
    boxShadow: "inset 0 0 0 2000px rgba(80, 54, 69, 0.3)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
  };

  const truncateDescription = (description, maxDescriptionWords) => {
    if (getNumberOfWords(beer.description) > maxDescriptionWords) {
      return truncateString(beer.description, maxDescriptionWords) + "...";
    }
    return beer.description;
  };

  return (
    <div className="text-white card beer-card" style={divStyle}>
      <h5 data-testid="" className="card-title">
        {beer.name}
      </h5>
      <p className="card-text">{beer.tagline}</p>
      <p className="card-text text-justify">
        {truncateDescription(beer.description, 20)}
      </p>
    </div>
  );
};

export default BeerCard;
