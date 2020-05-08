import {
  LOAD_BEERS_REQUESTED,
  LOAD_BEERS_SUCCEEDED,
  LOAD_NEW_PAGE,
  CHANGE_MIN_FIRST_BREWED_FILTER,
  CHANGE_MAX_FIRST_BREWED_FILTER,
} from "./actionTypes";

export const loadBeersRequested = () => {
  return { type: LOAD_BEERS_REQUESTED };
};

export const loadBeersSucceeded = (beers) => {
  return { type: LOAD_BEERS_SUCCEEDED, payload: beers };
};

export const loadNewPage = (newPage) => {
  return { type: LOAD_NEW_PAGE, payload: newPage };
};

export const changeMinFirstBrewedFilter = (firstBrewedDate) => {
  return { type: CHANGE_MIN_FIRST_BREWED_FILTER, payload: firstBrewedDate };
};

export const changeMaxFirstBrewedFilter = (firstBrewedDate) => {
  return { type: CHANGE_MAX_FIRST_BREWED_FILTER, payload: firstBrewedDate };
};
