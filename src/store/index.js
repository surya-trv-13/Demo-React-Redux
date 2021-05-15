import { createStore, applyMiddleware, compose } from "redux";
import rootSaga from "../sagas";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/rootReducer";

const createSaga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? compose(
        applyMiddleware(createSaga),
        window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
      )
    : applyMiddleware(createSaga)
);

createSaga.run(rootSaga);

export default store;
