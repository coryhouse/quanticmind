import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  store.runSaga = sagaMiddleware.run;
  return store;
}
