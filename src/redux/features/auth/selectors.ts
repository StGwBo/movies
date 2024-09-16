import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

const selectAuthStatus = (state: RootState) => state.auth.authStatus;
const selectEmail = (state: RootState) => state.auth.email;

const selectAuth = createSelector([selectAuthStatus, selectEmail], (authStatus, email) => ({
    authStatus,
    email,
}));

export { selectAuth };
