import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice";

const rootReducers = combineReducers({
    postTable: postSlice,
});

export const store = configureStore({
    reducer: rootReducers,
});
