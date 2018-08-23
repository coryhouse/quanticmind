import * as types from "../actions/actionTypes";
import { initialState } from "../store/initialState";

export default function errors(state = initialState.errors, action) {
  switch (action.type) {
    case types.LOAD_USER_FAILURE:
      return [...state, action.error];
    default:
      // nothing to do here, so just return the state passed in.
      return state;
  }
}
