import { SET_KEY_VALUE } from "./actionTypes";

export const setKeyValue = (key, value) => ({
  type: SET_KEY_VALUE,
  key,
  value
});
