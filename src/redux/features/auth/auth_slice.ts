import { createEvent, createStore, sample } from "effector";

const tokenExists = !!localStorage.getItem("token");

const initialState = {
    authStatus: false,
    email: "",
};

const setAuthStatus = createEvent<boolean>();
const setEmail = createEvent<string>();
const checkToken = createEvent();

const $auth = createStore(initialState)
    .on(setAuthStatus, (state, status) => ({ ...state, authStatus: status }))
    .on(setEmail, (state, email) => ({ ...state, email }));

sample({
    clock: checkToken,
    fn: () => tokenExists,
    target: setAuthStatus,
});

checkToken();

export { $auth, setAuthStatus, setEmail };
