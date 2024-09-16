import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";

const selectMovieList = (state: RootState) => state.movies.movieList;
const selectFavoriteMovies = (state: RootState) => state.movies.favoriteMovies;
const selectIsLoading = (state: RootState) => state.movies.isLoading;

const selectMovie = createSelector(
    [selectMovieList, selectFavoriteMovies, selectIsLoading],
    (movieList, favoriteMovies, isLoading) => ({
        movieList,
        favoriteMovies,
        isLoading,
        idFavorite: () => favoriteMovies.map((movie) => movie.id),
    })
);

export { selectMovie };
