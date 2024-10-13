import { Box, Divider, Paper, Typography } from "@mui/material";
import { MovieCard } from "../movie_card/movie_card";
import { useUnit } from "effector-react";
import { $idFavorite, $movies } from "../../redux/features/movies/movies_slice";

function UserFavorites() {
    const [favoriteMovies, idFavorite] = useUnit([$movies, $idFavorite]);

    const renderFilmCard = favoriteMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} idFavorite={idFavorite} />
    ));

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "1000px" }}>
            <Paper
                sx={{
                    width: "50%",
                    height: "55px",
                    mb: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 10,
                }}
            >
                <Typography variant="h5">Избранные фильмы</Typography>
                <Divider sx={{ mb: 1 }} />
            </Paper>

            <Box sx={{ display: "flex", flexWrap: "wrap", maxWidth: "95%" }}>{renderFilmCard}</Box>
        </Box>
    );
}

export { UserFavorites };
