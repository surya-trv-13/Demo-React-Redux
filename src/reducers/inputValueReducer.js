import { INPUT_VALUE } from "../actions/actionTypes";

const initialState = {
  data: "EE saaala Cup Naamde"
};

const inputValueReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_VALUE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default inputValueReducer;
