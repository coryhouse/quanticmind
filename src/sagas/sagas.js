import { put, take, all, fork, call } from "redux-saga/effects";
import * as userApi from "../api/userApi";
import * as userActions from "../actions/userActions";
import { DELETE_USER, SAVE_USER } from "../actions/actionTypes";

export function* loadUsers() {
  try {
    const users = yield call(userApi.getUsers);
    yield put(userActions.loadUserSuccess(users));
  } catch (error) {
    yield put(userActions.loadUserFailure(error));
  }
}

export function* saveUser(user, successCallback, failureCallback) {
  try {
    const savedUser = yield call(userApi.saveUser, user);
    successCallback(savedUser);
    yield put(userActions.saveUserSuccess(savedUser));
  } catch (error) {
    failureCallback(error);
  }
}

export function* deleteUser(userId, successCallback, failureCallback) {
  try {
    yield call(userApi.deleteUser, userId);
    successCallback();
  } catch (error) {
    failureCallback(error);
  }
}

export function* watchDeleteUser() {
  while (true) {
    const action = yield take(DELETE_USER);
    yield call(
      deleteUser,
      action.userId,
      action.successCallback,
      action.failureCallback
    );
  }
}

export function* watchSaveUser() {
  while (true) {
    const action = yield take(SAVE_USER);
    yield call(
      saveUser,
      action.user,
      action.successCallback,
      action.failureCallback
    );
  }
}

// Challenge:
// Create new sagas for handling saving the user
// 1. Create watchSaveUser
// 2. Create saveUser saga
// 3. Create a fake saveUser API in userApi.js
// 4. Create 2 new actions: SAVE_USER_SUCCESS and SAVE_USER_FAILURE
// 5. Handle these responses in reducer

export default function* rootSaga() {
  // Start all of our sagas in parallel
  yield all([fork(loadUsers), fork(watchDeleteUser), fork(watchSaveUser)]);
}
