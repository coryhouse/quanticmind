import { put, take, all, fork, call } from "redux-saga/effects";
import * as userApi from "../api/userApi";
import * as userActions from "../actions/userActions";
import { DELETE_USER } from "../actions/actionTypes";

export function* loadUsers() {
  try {
    const users = yield call(userApi.getUsers);
    yield put(userActions.loadUserSuccess(users));
  } catch (error) {
    yield put(userActions.loadUserFailure(error));
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

export default function* rootSaga() {
  // Start all of our sagas in parallel
  yield all([fork(loadUsers), fork(watchDeleteUser)]);
}
