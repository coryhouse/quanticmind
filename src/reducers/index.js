import loggedInUser from "./loggedInUserReducer";
import users from "./usersReducer";
import { combineReducers } from "redux";

// LIST ALL MY REDUCERS HERE SO REDUX KNOWS ABOUT THEM.
const rootReducer = combineReducers({
  loggedInUser,
  users
});

export default rootReducer;
