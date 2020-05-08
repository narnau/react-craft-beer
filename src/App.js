import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import {
  loadBeersRequested,
  loadNewPage,
  changeMinFirstBrewedFilter,
  changeMaxFirstBrewedFilter,
} from "./actions/actions";
import BeerCard from "./components/BeerCard";
import PaginationPanel from "./components/PaginationPanel";
import FilterPanel from "./components/FilterPanel";

function App(props) {
  let loadBeers = props.loadBeersRequested;

  useEffect(() => {
    loadBeers();
    return () => {
      // cleanup;
    };
  }, [loadBeers]);

  const onPaginationClick = (newPage) => {
    props.loadNewPage(newPage);
  };

  return (
    <div className="container">
      <FilterPanel></FilterPanel>
      {props.currentBeers.map((beer, idx) => {
        return <BeerCard key={idx} beer={beer}></BeerCard>;
      })}
      <PaginationPanel
        currentPage={props.currentPage}
        totalBeers={props.totalFilteredBeers}
        countPerPage={props.countPerPage}
        totalPages={props.totalPages}
        onClick={onPaginationClick}
      ></PaginationPanel>
    </div>
  );
}

function mapStateToProps(appState) {
  return {
    currentBeers: appState.beers.currentBeers,
    currentPage: appState.beers.currentPage,
    totalFilteredBeers: appState.beers.totalFilteredBeers,
    countPerPage: appState.beers.countPerPage,
    totalPages: appState.beers.totalPages,
  };
}

export default connect(mapStateToProps, {
  loadBeersRequested,
  loadNewPage,
  changeMinFirstBrewedFilter,
  changeMaxFirstBrewedFilter,
})(App);
