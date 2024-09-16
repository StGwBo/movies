import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store/store";

const initialState = {
    authStatus: false,
    email: "",
};

const authlSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthStatus(state, action) {
            state.authStatus = action.payload;
        },
        setEmail(state, action) {
            state.email = action.payload;
        },
    },
});

export const checkAuthStatus = () => (dispatch: AppDispatch) => {
    const tokenExists = !!localStorage.getItem("token");
    dispatch(setAuthStatus(tokenExists));
};

export const { setAuthStatus, setEmail } = authlSlice.actions;
export default authlSlice.reducer;
