import { useEffect } from "react";
import { MovieCard } from "../movie_card/movie_card";
import { createMovieListUrl } from "../../utils/create_movie_list_url";
import { Box, CircularProgress } from "@mui/material";
import { useUnit } from "effector-react";
import { $filter } from "../../redux/features/filter/filter_slice";
import { $idFavorite, $movies, fetchMovies } from "../../redux/features/movies/movies_slice";

function MovieContainer() {
    const { currentPage, sortYear, sortGenres, sortCriteria } = useUnit($filter);
    const [{ movieList, isLoading }, idFavorite] = useUnit([$movies, $idFavorite]);

    useEffect(() => {
        const fetchData = async () => {
            const movieListUrl = createMovieListUrl({
                page: currentPage,
                years: sortYear,
                criteria: sortCriteria,
                genres: sortGenres,
            });
            await fetchMovies(movieListUrl);
        };
        fetchData();
    }, [currentPage, sortYear, sortGenres, sortCriteria]);

    const movieCards = movieList.map((movie) => <MovieCard key={movie.id} movie={movie} idFavorite={idFavorite} />);

    const loadingContent = isLoading ? <CircularProgress /> : movieCards;

    return <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "end" }}>{loadingContent}</Box>;
}

export { MovieContainer };
