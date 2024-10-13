import { YEAR_RANGE } from "../../../constants/constants";
import { createEvent, createStore } from "effector";
import { Sort } from "../../../types/types";
import { fetchMovies } from "../movies/movies_slice";

const initialState = {
    currentPage: 1,
    totalPages: 500,
    sortYear: YEAR_RANGE,
    sortGenres: [] as Sort[],
    sortCriteria: "vote_count",
};

const setCurrentPage = createEvent<number>();
const setTotalPages = createEvent<number>();
const setSortYear = createEvent<number[]>();
const setSortGenres = createEvent<Sort[]>();
const setSortCriteria = createEvent<string>();
const resetFilters = createEvent();

const $filter = createStore(initialState)
    .on(setCurrentPage, (state, currentPage) => ({ ...state, currentPage }))
    .on(setTotalPages, (state, totalPages) => ({ ...state, totalPages }))
    .on(setSortYear, (state, sortYear) => ({ ...state, sortYear }))
    .on(setSortGenres, (state, sortGenres) => ({ ...state, sortGenres }))
    .on(setSortCriteria, (state, sortCriteria) => ({ ...state, sortCriteria }))
    .on(fetchMovies.doneData, (state, { moviesData }) => ({
        ...state,
        totalPages: moviesData.total_pages,
    }))
    .reset(resetFilters);

export { $filter, resetFilters, setCurrentPage, setTotalPages, setSortYear, setSortGenres, setSortCriteria };
