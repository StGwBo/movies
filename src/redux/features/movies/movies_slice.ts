import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFavoriteMovies } from "../../../api";
import { getMovies } from "../../../api/movies/get_movies";
import { setTotalPages } from "../filter/filter_slice";
import { MovieList } from "../../../types/types";
import { useUnit } from "effector-react";
import { createEffect, createEvent, createStore } from "effector";
import { setAuthStatus } from "../auth/auth_slice";

type InitialState = {
    movieList: MovieList[];
    favoriteMovies: MovieList[];
    isLoading: boolean;
};

const initialState: InitialState = {
    movieList: [],
    favoriteMovies: [],
    isLoading: false,
};

const setMoviesList = createEvent<MovieList[]>();

const fetchMovies = createEffect(async (url) => {
    const moviesData = await getMovies(url);
    const favoriteMovies = await getFavoriteMovies();

    return { moviesData, favoriteMovies };
});

const $movies = createStore(initialState)
    .on(setMoviesList, (state, movieList) => ({ ...state, movieList }))
    .on(fetchMovies.doneData, (state, { moviesData, favoriteMovies }) => ({
        ...state,
        movieList: moviesData.results,
        favoriteMovies,
        isLoading: false,
    }));

const $idFavorite = $movies.map((state) => state.favoriteMovies.map((movie) => movie.id));
// .on(setAuthStatus, (_, status) => {
//     if (!status) {
//         initialState;
//     }
// });

export { $movies, $idFavorite, setMoviesList, fetchMovies };

// const onSetTotalPages = useUnit(setTotalPages);

// const moviesSlice = createSlice({
//     name: "movies",
//     initialState,
//     reducers: {
//         setMoviesList(state, action) {
//             state.movieList = action.payload;
//         },
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchMovies.pending, (state) => {
//                 state.isLoading = true;
//             })
//             .addCase(fetchMovies.fulfilled, (state, action) => {
//                 state.movieList = action.payload.moviesData.results;
//                 state.favoriteMovies = action.payload.favoriteMovies;
//                 state.isLoading = false;
//             });
//         .addCase(setAuthStatus, (_, action) => {
//             if (!action.payload) {
//                 return initialState;
//             }
//         });
//     },
// });
