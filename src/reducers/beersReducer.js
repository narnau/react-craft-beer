import {
  LOAD_BEERS_SUCCEEDED,
  LOAD_NEW_PAGE,
  CHANGE_MIN_FIRST_BREWED_FILTER,
  CHANGE_MAX_FIRST_BREWED_FILTER,
} from "../actions/actionTypes";

const initialState = {
  beers: [],
  currentBeers: [],
  filteredBeers: [],
  beersPerPage: 4,
  totalFilteredBeers: 0,
  currentPage: 1,
  totalPages: 0,
  firstBrewedFilter: {
    minDate: null,
    maxDate: null,
  },
  minFirstBrewedDate: null,
  maxFirstBrewedDate: null,
};

export default function beersReducer(state = initialState, action) {
  let filteredBeers, totalPages, totalFilteredBeers, minDate, maxDate;

  switch (action.type) {
    case LOAD_BEERS_SUCCEEDED:
      totalFilteredBeers = action.payload.length;
      totalPages = Math.ceil(totalFilteredBeers / state.beersPerPage);
      let firstBrewedDates = action.payload.map(
        ({ first_brewed }) => first_brewed
      );
      minDate = getFirstBrewedMinDate(firstBrewedDates);
      maxDate = getFirstBrewedMaxDate(firstBrewedDates);
      return {
        ...state,
        beers: [...action.payload],
        filteredBeers: [...action.payload],
        totalFilteredBeers: totalFilteredBeers,
        totalPages: totalPages,
        currentBeers: getCurrentBeers(
          state.currentPage,
          state.beersPerPage,
          action.payload
        ),
        firstBrewedFilter: {
          minDate: minDate,
          maxDate: maxDate,
        },
        minFirstBrewedDate: minDate,
        maxFirstBrewedDate: maxDate,
      };
    case LOAD_NEW_PAGE:
      return {
        ...state,
        currentPage: action.payload,
        currentBeers: getCurrentBeers(
          action.payload,
          state.beersPerPage,
          state.filteredBeers
        ),
      };
    case CHANGE_MIN_FIRST_BREWED_FILTER:
      filteredBeers = getFilteredBeers(
        action.payload,
        state.firstBrewedFilter.maxDate,
        state.beers
      );
      totalFilteredBeers = filteredBeers.length;
      if (totalFilteredBeers > 0) {
        totalPages = Math.ceil(totalFilteredBeers / state.beersPerPage);
      } else {
        totalPages = 0;
      }

      return {
        ...state,
        currentPage: 1,
        totalFilteredBeers: totalFilteredBeers,
        totalPages: totalPages,
        filteredBeers: filteredBeers,
        currentBeers: getCurrentBeers(1, state.beersPerPage, filteredBeers),
        firstBrewedFilter: {
          ...state.firstBrewedFilter,
          minDate: action.payload,
        },
      };
    case CHANGE_MAX_FIRST_BREWED_FILTER:
      filteredBeers = getFilteredBeers(
        state.firstBrewedFilter.minDate,
        action.payload,
        state.beers
      );
      totalFilteredBeers = filteredBeers.length;
      if (totalFilteredBeers > 0) {
        totalPages = Math.ceil(totalFilteredBeers / state.beersPerPage);
      } else {
        totalPages = 0;
      }

      return {
        ...state,
        currentPage: 1,
        totalFilteredBeers: totalFilteredBeers,
        totalPages: totalPages,
        filteredBeers: filteredBeers,
        currentBeers: getCurrentBeers(1, state.beersPerPage, filteredBeers),
        firstBrewedFilter: {
          ...state.firstBrewedFilter,
          maxDate: action.payload,
        },
      };
    default:
      return state;
  }
}

const getCurrentBeers = (currentPage, beersPerPage, beersList) => {
  const indexOfLastBeer = currentPage * beersPerPage;
  const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
  const currentBeers = beersList.slice(indexOfFirstBeer, indexOfLastBeer);
  return currentBeers;
};

const getFilteredBeers = (minDate, maxDate, beers) => {
  return beers.filter((beer) => {
    let result =
      parseStringToDate(beer.first_brewed) >= minDate &&
      parseStringToDate(beer.first_brewed) <= maxDate;
    return result;
  });
};

const getFirstBrewedMinDate = (firstBrewedDates) => {
  return minDate(firstBrewedDates);
};

const getFirstBrewedMaxDate = (firstBrewedDates) => {
  return maxDate(firstBrewedDates);
};

const parseStringToDate = (dateString) => {
  return new Date(dateString.split("/")[1], dateString.split("/")[0] - 1);
};

function minDate(allDates) {
  let minDateObj = parseStringToDate(allDates[0]);
  allDates.forEach(function (dt) {
    if (parseStringToDate(dt) < minDateObj) {
      minDateObj = parseStringToDate(dt);
    }
  });
  return minDateObj;
}

function maxDate(allDates) {
  let maxDateObj = parseStringToDate(allDates[0]);
  allDates.forEach(function (dt) {
    if (parseStringToDate(dt) > maxDateObj) {
      maxDateObj = parseStringToDate(dt);
    }
  });
  return maxDateObj;
}
