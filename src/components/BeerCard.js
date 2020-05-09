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
      return (description =
        truncateString(beer.description, maxDescriptionWords) + "...");
    } else {
      description = beer.description;
    }
  };

  let description = truncateDescription(beer.description, 20);

  return (
    <div className="text-white card beer-card" style={divStyle}>
      <h5 className="card-title">{beer.name}</h5>
      <p className="card-text">{beer.tagline}</p>
      <p className="card-text">{description}</p>
    </div>
  );
};

export default BeerCard;
