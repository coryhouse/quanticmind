import * as types from "../actions/actionTypes";
import { initialState } from "../store/initialState";

export default function loggedInUser(
  state = initialState.loggedInUser,
  action
) {
  switch (action.type) {
    case types.LOGOUT_USER:
      // Here's the new data that should be stored
      // in the Redux store for loggedInUser.
      return null;
    default:
      // nothing to do here, so just return the state passed in.
      return state;
  }
}
