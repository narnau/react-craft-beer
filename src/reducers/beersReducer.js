import {
  LOAD_BEERS_SUCCEEDED,
  LOAD_NEW_PAGE,
  CHANGE_MIN_FIRST_BREWED_FILTER,
  CHANGE_MAX_FIRST_BREWED_FILTER,
} from "../actions/actionTypes";
import {
  parseStringToDate,
  parseStringArrayToDateArray,
  getMinDate,
  getMaxDate,
} from "../utils/dateUtils";

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
  let filteredBeers;

  switch (action.type) {
    case LOAD_BEERS_SUCCEEDED:
      let totalFilteredBeers = action.payload.length;
      let firstBrewedDates = action.payload.map(
        ({ first_brewed }) => first_brewed
      );
      let minDate = getFirstBrewedMinDate(firstBrewedDates);
      let maxDate = getFirstBrewedMaxDate(firstBrewedDates);
      return {
        ...state,
        beers: [...action.payload],
        filteredBeers: [...action.payload],
        totalFilteredBeers: totalFilteredBeers,
        totalPages: getTotalPages(totalFilteredBeers, state.beersPerPage),
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

      return {
        ...state,
        currentPage: 1,
        totalFilteredBeers: filteredBeers.length,
        totalPages: getTotalPages(filteredBeers.length, state.beersPerPage),
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
      return {
        ...state,
        currentPage: 1,
        totalFilteredBeers: filteredBeers.length,
        totalPages: getTotalPages(filteredBeers.length, state.beersPerPage),
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

const getTotalPages = (totalBeers, beersPerPage) => {
  if (totalBeers > 0) {
    return Math.ceil(totalBeers / beersPerPage);
  }
  return 0;
};

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
  let datesArray = parseStringArrayToDateArray(firstBrewedDates);
  return getMinDate(datesArray);
};

const getFirstBrewedMaxDate = (firstBrewedDates) => {
  let datesArray = parseStringArrayToDateArray(firstBrewedDates);
  return getMaxDate(datesArray);
};
