import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import modalSlice from "../features/modal/modal_slice";
import movieSlice from "../features/movies/movies_slice";
import filterSLice from "../features/filter/filter_slice";
import authSlice from "../features/auth/auth_slice";

const rootReducer = combineReducers({
    modal: modalSlice,
    movies: movieSlice,
    filter: filterSLice,
    auth: authSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
