import { combineReducers } from "redux";

import inputValueReducer from "./inputValueReducer";
import getApiReducer from "./getApiReducer";

const rootReducer = combineReducers({
  inputValueReducer,
  getApiReducer
});

export default rootReducer;
