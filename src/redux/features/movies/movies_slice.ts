import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFavoriteMovies } from "../../../api";
import { getMovies } from "../../../api/movies/get_movies";
import { setTotalPages } from "../filter/filter_slice";
import { MovieList } from "../../../types/types";
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

const fetchMovies = createAsyncThunk("movies/fetchMovies", async (url: string, { dispatch }) => {
    const moviesData = await getMovies(url);
    const favoriteMovies = await getFavoriteMovies();
    
    dispatch(setTotalPages(moviesData.total_pages));
    return { moviesData, favoriteMovies };
});

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        setMoviesList(state, action) {
            state.movieList = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.movieList = action.payload.moviesData.results;
                state.favoriteMovies = action.payload.favoriteMovies;
                state.isLoading = false;
            })
            .addCase(setAuthStatus, (_, action) => {
                if (!action.payload) {
                    return initialState;
                }
            });
    },
});

export const { setMoviesList } = moviesSlice.actions;
export { fetchMovies };
export default moviesSlice.reducer;
