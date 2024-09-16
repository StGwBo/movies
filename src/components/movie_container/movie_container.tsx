import { useEffect } from "react";
import { MovieCard } from "../movie_card/movie_card";
import { createMovieListUrl } from "../../utils/create_movie_list_url";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { Box, CircularProgress } from "@mui/material";
import { selectFilter } from "../../redux/features/filter/selectors";
import { selectMovie } from "../../redux/features/movies/selectors";
import { fetchMovies } from "../../redux/features/movies/movies_slice";

function MovieContainer() {
    const { currentPage, sortYear, sortGenres, sortCriteria } = useAppSelector(selectFilter);
    const { movieList, idFavorite, isLoading } = useAppSelector(selectMovie);

    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const movieListUrl = createMovieListUrl({
                page: currentPage,
                years: sortYear,
                criteria: sortCriteria,
                genres: sortGenres,
            });
            await dispatch(fetchMovies(movieListUrl));
        };
        fetchData();
    }, [currentPage, sortYear, sortGenres, sortCriteria, dispatch]);

    const movieCards = movieList.map((movie) => <MovieCard key={movie.id} movie={movie} idFavorite={idFavorite()} />);

    const loadingContent = isLoading ? <CircularProgress /> : movieCards;

    return <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "end" }}>{loadingContent}</Box>;
}

export { MovieContainer };
