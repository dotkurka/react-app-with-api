import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import createSagaMiddleware from "redux-saga";
import watchUsers from "../sagas";

const saga = createSagaMiddleware();

const rootReducers = combineReducers({
    users: userSlice,
});

export const store = configureStore({
    reducer: rootReducers,
    middleware: [saga],
});

saga.run(watchUsers);
