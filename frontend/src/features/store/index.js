import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";

const saga = createSagaMiddleware();

const rootReducers = combineReducers({
    users: userSlice,
});

const store = configureStore({
    reducer: rootReducers,
    middleware: [saga],
});

saga.run(rootSaga);

export default store;
