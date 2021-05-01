import {
  API_START_TRIGGER,
  API_SUCCESS,
  API_FAILURE,
  BUTTON_CLICK
} from "./actionTypes";

export const setButtonClick = (data) => ({
  type: BUTTON_CLICK,
  payload: data
});

export const setApiStart = () => ({
  type: API_START_TRIGGER
});

export const setApiSuccess = (data) => ({
  type: API_SUCCESS,
  payload: data
});

export const setApiFailure = (data) => ({
  type: API_FAILURE,
  payload: data
});
