import { getFavoriteMovies } from "../../../api";
import { getMovies } from "../../../api/movies/get_movies";
import { MovieList } from "../../../types/types";
import { createEffect, createEvent, createStore } from "effector";

type InitialState = {
    movieList: MovieList[];
    favoriteMovies: MovieList[];
};

const initialState: InitialState = {
    movieList: [],
    favoriteMovies: [],
};

const setMoviesList = createEvent<MovieList[]>();

const fetchMovies = createEffect(async (url) => {
    const moviesData = await getMovies(url);
    const favoriteMovies = await getFavoriteMovies();

    return { moviesData, favoriteMovies };
});

const $isLoading = fetchMovies.pending;

const $movies = createStore(initialState)
    .on(setMoviesList, (state, movieList) => ({ ...state, movieList }))
    .on(fetchMovies.doneData, (state, { moviesData, favoriteMovies }) => ({
        ...state,
        movieList: moviesData.results,
        favoriteMovies,
    }));

const $idFavorite = $movies.map((state) => state.favoriteMovies.map((movie) => movie.id));

export { $movies, $idFavorite, $isLoading, setMoviesList, fetchMovies };
