import React from "react";
import BeerCard from "./BeerCard";
import { connect } from "react-redux";

const BeerCardList = ({ currentBeers }) => {
  return (
    <div className="beers-container">
      <div className="beers-wrapper m-3">
        {currentBeers.map((beer, idx) => {
          return <BeerCard key={idx} beer={beer}></BeerCard>;
        })}
      </div>
    </div>
  );
};

function mapStateToProps(appState) {
  return {
    currentBeers: appState.beers.currentBeers,
  };
}

export default connect(mapStateToProps, null)(BeerCardList);
