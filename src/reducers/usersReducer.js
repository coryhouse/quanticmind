import * as types from "../actions/actionTypes";
import { initialState } from "../store/initialState";

export default function users(state = initialState.users, action) {
  switch (action.type) {
    case types.LOAD_USER_SUCCESS:
      // Here's the new data that should be stored
      // in the Redux store for loggedInUser.
      return action.users;
    case types.DELETE_USER:
      return state.filter(u => u.id !== action.userId);
    case types.SAVE_USER:
      if (!action.user.id) {
        // In a real app, I'd call an api to save the user here,
        // and get back a user object with an ID assigned.
        const savedUser = { ...action.user, id: guid() };

        // Add the passed user to the array of users in state.
        return [...state, savedUser];
      } else {
        // Replace the user that was just edited.
        return state.map(u => (u.id === action.user.id ? action.user : u));
      }
    default:
      // nothing to do here, so just return the state passed in.
      return state;
  }
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
}
