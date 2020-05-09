import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { loadBeersRequested } from "./actions/actions";
import PaginationPanel from "./components/PaginationPanel";
import FilterPanel from "./components/FilterPanel";
import BeerCardList from "./components/BeerCardList";

function App({ loadBeersRequested }) {
  useEffect(() => {
    loadBeersRequested();
  }, [loadBeersRequested]);

  return (
    <div className="container">
      <FilterPanel></FilterPanel>
      <BeerCardList></BeerCardList>
      <PaginationPanel></PaginationPanel>
    </div>
  );
}

export default connect(null, {
  loadBeersRequested,
})(App);
