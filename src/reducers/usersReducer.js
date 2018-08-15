import * as types from "../actions/actionTypes";
import { initialState } from "../store/initialState";

export default function users(state = initialState.users, action) {
  switch (action.type) {
    case types.LOAD_USER_SUCCESS:
      debugger;
      // Here's the new data that should be stored
      // in the Redux store for loggedInUser.
      return action.users;
    default:
      // nothing to do here, so just return the state passed in.
      return state;
  }
}
