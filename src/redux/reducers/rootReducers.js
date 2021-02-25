import { combineReducers } from "redux";

import filtersReducer from "./filters";

export default combineReducers({
  filters: filtersReducer,
});
