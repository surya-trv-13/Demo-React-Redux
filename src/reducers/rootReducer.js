import { combineReducers } from "redux";

import inputValueReducer from "./inputValueReducer";
import getApiReducer from "./getApiReducer";
import getkeyValueReducer from "./getKeyValueReducer";

const rootReducer = combineReducers({
  inputValueReducer,
  getApiReducer,
  getkeyValueReducer
});

export default rootReducer;
