import React from "react";
import DateSelector from "./DateSelector";
import { connect } from "react-redux";
import {
  changeMinFirstBrewedFilter,
  changeMaxFirstBrewedFilter,
} from "../actions/actions";
import RoundedContainer from "./RoundedContainer";

const FilterPanel = ({
  minDate,
  maxDate,
  firstBrewedFilter,
  changeMinFirstBrewedFilter,
  changeMaxFirstBrewedFilter,
}) => {
  const createMonthsDataSource = () => {
    const months = [];
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    return months;
  };

  const createYearsDataSource = (minDate, maxDate) => {
    const years = [];

    if ((minDate && maxDate) !== null) {
      for (let i = minDate.getFullYear(); i <= maxDate.getFullYear(); i++) {
        years.push(i);
      }
    }

    return years;
  };

  let monthsDataSource = createMonthsDataSource();
  let yearsDataSource = createYearsDataSource(minDate, maxDate);

  return (
    <RoundedContainer
      backgroundColor="#efefef"
      className="filter-panel text-center"
    >
      <div className="row p-3">
        <RoundedContainer backgroundColor="#DFDFDF" className="col3 p-1 mx-2">
          <span>Brewed between</span>
        </RoundedContainer>
        <div className="col-4">
          <DateSelector
            monthsDataSource={monthsDataSource}
            yearsDataSource={yearsDataSource}
            currentDate={firstBrewedFilter.minDate}
            onChange={(newMinDate) => changeMinFirstBrewedFilter(newMinDate)}
            backgroundColor="#DFDFDF"
          ></DateSelector>
        </div>
        <RoundedContainer backgroundColor="#DFDFDF" className="col-1 p-1 mx-2">
          <span>and</span>
        </RoundedContainer>
        <div className="col-4">
          <DateSelector
            monthsDataSource={monthsDataSource}
            yearsDataSource={yearsDataSource}
            currentDate={firstBrewedFilter.maxDate}
            onChange={(newMaxDate) => changeMaxFirstBrewedFilter(newMaxDate)}
            backgroundColor="#DFDFDF"
          ></DateSelector>
        </div>
      </div>
    </RoundedContainer>
  );
};

function mapStateToProps(appState) {
  return {
    minDate: appState.beers.minFirstBrewedDate,
    maxDate: appState.beers.maxFirstBrewedDate,
    firstBrewedFilter: appState.beers.firstBrewedFilter,
  };
}

export default connect(mapStateToProps, {
  changeMinFirstBrewedFilter,
  changeMaxFirstBrewedFilter,
})(FilterPanel);
