import React, { useState, useEffect } from "react";
import DateSelector from "./DateSelector";
import { connect } from "react-redux";
import {
  changeMinFirstBrewedFilter,
  changeMaxFirstBrewedFilter,
} from "../actions/actions";

const FilterPanel = ({
  minDate,
  maxDate,
  firstBrewedFilter,
  changeMinFirstBrewedFilter,
  changeMaxFirstBrewedFilter,
}) => {
  const [monthsDataSource, setMonthsDataSource] = useState([]);
  const [yearsDataSource, setYearsDataSource] = useState([]);

  useEffect(() => {
    setMonthsDataSource(createMonthsDataSource());
    setYearsDataSource(createYearsDataSource(minDate, maxDate));
    return () => {};
  }, [minDate, maxDate]);

  const createYearsDataSource = (minDate, maxDate) => {
    const years = [];

    if ((minDate && maxDate) !== null) {
      for (let i = minDate.getFullYear(); i <= maxDate.getFullYear(); i++) {
        years.push(i);
      }
    }

    return years;
  };

  const createMonthsDataSource = () => {
    const months = [];
    for (let i = 1; i <= 12; i++) {
      months.push(i);
    }
    return months;
  };

  const handleChangeMaxDate = (newMaxDate) => {
    changeMaxFirstBrewedFilter(newMaxDate);
  };

  const handleChangeMinDate = (newMinDate) => {
    changeMinFirstBrewedFilter(newMinDate);
  };

  return (
    <div>
      <DateSelector
        monthsDataSource={monthsDataSource}
        yearsDataSource={yearsDataSource}
        currentDate={firstBrewedFilter.minDate}
        onChange={handleChangeMinDate}
      ></DateSelector>
      <DateSelector
        monthsDataSource={monthsDataSource}
        yearsDataSource={yearsDataSource}
        currentDate={firstBrewedFilter.maxDate}
        onChange={handleChangeMaxDate}
      ></DateSelector>
    </div>
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
