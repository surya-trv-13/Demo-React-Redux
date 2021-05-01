import { createStore, applyMiddleware } from "redux";
import rootSaga from "../sagas";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../reducers/rootReducer";

const createSaga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(createSaga));

createSaga.run(rootSaga);

export default store;
