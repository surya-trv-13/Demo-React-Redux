import { SET_KEY_VALUE } from "../actions/actionTypes";

const initialValue = {};

const getkeyValueReducer = (state = initialValue, action = {}) => {
  switch (action.type) {
    case SET_KEY_VALUE:
      state[action.key] = action.value;
      return {
        ...state
      };
    default:
      return state;
  }
};

export default getkeyValueReducer;
