import {
  API_START_TRIGGER,
  API_FAILURE,
  API_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  data: {}
};

const getApiReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case API_START_TRIGGER:
      return { ...state, loading: true };
    case API_FAILURE:
      return { ...initialState, data: "ERROR OCCURED" };
    case API_SUCCESS:
      console.log("CALLED");
      return { ...initialState, data: action.payload };
    default:
      return state;
  }
};

export default getApiReducer;
