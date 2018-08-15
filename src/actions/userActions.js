import * as types from "./actionTypes";

// Action creator
function loadUserSuccess(users) {
  return {
    type: types.LOAD_USER_SUCCESS,
    users
  };
}

// Thunk. A function that returns a function.
// The execution of the inner function happens later.
export function loadUsers() {
  return function(dispatch, getState) {
    fetch("http://www.mocky.io/v2/5b61e5e6300000f10d6a43ff")
      .then(response => response.json())
      .then(users => {
        dispatch(loadUserSuccess(users));
      });
  };
}
