import * as types from "./actionTypes";

// Action creator
export function logout() {
  return {
    type: types.LOGOUT_USER
  };
}
