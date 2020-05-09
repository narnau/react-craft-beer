import React from "react";

const BeerCard = ({ beer }) => {
  const divStyle = {
    backgroundImage: "url(" + beer.image_url + ")",
    backgroundSize: "contain",
    boxShadow: "inset 0 0 0 2000px rgba(80, 54, 69, 0.3)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right center",
  };

  const divideStringInWords = (str) => {
    return str.split(" ");
  };
  const getTruncatedDescription = (description, numberOfWords) => {
    let splitString = divideStringInWords(description);
    if (splitString.length > numberOfWords) {
      return splitString.splice(0, numberOfWords).join(" ") + "...";
    }
    return description;
  };

  let truncatedDescription = getTruncatedDescription(beer.description, 20);

  return (
    <div className="text-white card beer-card" style={divStyle}>
      <h5 className="card-title">{beer.name}</h5>
      <p className="card-text">{beer.tagline}</p>
      <p className="card-text">{truncatedDescription}</p>
    </div>
  );
};

export default BeerCard;
