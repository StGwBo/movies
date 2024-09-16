import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

const selectTotalPages = (state: RootState) => state.filter.totalPages;
const selectCurrentPage = (state: RootState) => state.filter.currentPage;
const selectSortYear = (state: RootState) => state.filter.sortYear;
const selectSortGenres = (state: RootState) => state.filter.sortGenres;
const selectSortCriteria = (state: RootState) => state.filter.sortCriteria;

const selectFilter = createSelector(
    [selectCurrentPage, selectTotalPages, selectSortYear, selectSortGenres, selectSortCriteria],
    (currentPage, totalPages, sortYear, sortGenres, sortCriteria) => ({
        currentPage,
        totalPages,
        sortYear,
        sortGenres,
        sortCriteria,
    })
);

export { selectFilter };
