import { call, put, takeEvery } from "redux-saga/effects";
import * as Api from "../api/recipeApi";

import { LOAD_BEERS_REQUESTED } from "../actions/actionTypes";
import { loadBeersSucceeded } from "../actions/actions";

// worker Saga: will be fired on LOAD_BEERS_REQUESTED actions
function* fetchBeers() {
  try {
    const beers = yield call(Api.loadBeers);
    const action = loadBeersSucceeded(beers);
    yield put(action);
  } catch (e) {
    // yield put({ type: "USER_FETCH_FAILED", message: e.message });
    console.log("error");
  }
}

/*
  Starts fetchBeer on each dispatched `USER_FETCH_REQUESTED` action.
*/
function* beersSaga() {
  yield takeEvery(LOAD_BEERS_REQUESTED, fetchBeers);
}

export default beersSaga;
