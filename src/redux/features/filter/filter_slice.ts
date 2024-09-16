import { createSlice } from "@reduxjs/toolkit";
import { YEAR_RANGE } from "../../../constants/constants";

const initialState = {
    currentPage: 1,
    totalPages: 500,
    sortYear: YEAR_RANGE,
    sortGenres: [],
    sortCriteria: "vote_count",
};

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload;
        },
        setTotalPages(state, action) {
            state.totalPages = action.payload;
        },
        setSortYear(state, action) {
            state.sortYear = action.payload;
        },
        setSortGenres(state, action) {
            state.sortGenres = action.payload;
        },
        setSortCriteria(state, action) {
            state.sortCriteria = action.payload;
        },
        resetFilters() {
            return initialState;
        },
    },
});

export const { resetFilters, setCurrentPage, setTotalPages, setSortYear, setSortGenres, setSortCriteria } =
    filterSlice.actions;
export { initialState };
export default filterSlice.reducer;
