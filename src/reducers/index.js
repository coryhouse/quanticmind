import loggedInUser from "./loggedInUserReducer";
import users from "./usersReducer";
import errors from "./errorsReducer";
import { combineReducers } from "redux";

// LIST ALL MY REDUCERS HERE SO REDUX KNOWS ABOUT THEM.
const rootReducer = combineReducers({
  loggedInUser,
  errors,
  users
});

export default rootReducer;
