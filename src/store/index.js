import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import beersSaga from "../sagas/beersSaga";
import rootReducer from "../reducers/index";
import "bootstrap/dist/css/bootstrap.min.css";

export default function configureStore() {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  // then run the saga
  sagaMiddleware.run(beersSaga);

  return store;
}
