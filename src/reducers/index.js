import { combineReducers } from "redux";
import beers from "./beersReducer";

const rootReducer = combineReducers({
  beers,
});

export default rootReducer;
