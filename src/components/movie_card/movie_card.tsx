import { useEffect, useState } from "react";
import { MovieList } from "../../types/types";
import { Link } from "react-router-dom";
import SnackbarError from "../common/snack_bar";
import { API } from "../../api";
import { STYLES } from "./styles";
import { handleToggleFavorite } from "../../utils/toggle_favorite";
import { Button, CardActions, Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

type PropsResultsMovie = {
    movie: MovieList;
    idFavorite: number[];
};

const DEFAULT_STATE = {
    IMAGE_LOADED: false,
    FAVORITE: false,
    NOTIFICATION: false,
};

function MovieCard({ movie, idFavorite }: PropsResultsMovie) {
    const [imageLoaded, setImageLoaded] = useState(DEFAULT_STATE.IMAGE_LOADED);
    const [isFavorite, setIsFavorite] = useState(DEFAULT_STATE.FAVORITE);
    const [isOpenNotification, setIsOpenNotification] = useState<boolean>(DEFAULT_STATE.NOTIFICATION);

    useEffect(() => {
        const isFavoriteMovie = idFavorite.some((id) => id === movie.id);
        setIsFavorite(isFavoriteMovie as boolean);
    }, [idFavorite, movie]);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const iconStar = isFavorite ? (
        <StarIcon sx={{ width: 30, height: 30 }} />
    ) : (
        <StarBorderIcon sx={{ width: 30, height: 30 }} />
    );

    return (
        <Card sx={STYLES.CARD}>
            <Box>
                {!imageLoaded && <Box sx={STYLES.IMAGE_LOADER_OVERLAY} />}
                <Link to={`/details/${movie.id}`}>
                    <CardMedia
                        component="img"
                        height="440"
                        image={`${API.LINKS.BASE_IMG}${movie.poster_path}`}
                        alt={`img ${movie.backdrop_path}`}
                        onLoad={handleImageLoad}
                        style={{ ...STYLES.MEDIA, opacity: imageLoaded ? 1 : 0 }}
                    />
                </Link>

                <CardActions sx={STYLES.CARD_ACTIONS}>
                    <Button
                        size="large"
                        color="primary"
                        onClick={() =>
                            handleToggleFavorite({
                                id: movie.id,
                                setIsFavorite: setIsFavorite,
                                isFavorite: isFavorite,
                                setIsOpenNotification: setIsOpenNotification,
                            })
                        }
                    >
                        {iconStar}
                    </Button>
                </CardActions>
                <Link to={`/details/${movie.id}`}>
                    <CardContent sx={STYLES.CONTENT}>
                        <Box>
                            <Typography sx={STYLES.TEXT_TITLE} variant="h5" component="div">
                                {movie.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={STYLES.TEXT_RATING}>
                                Рейтинг {movie.vote_average.toFixed(1)}
                            </Typography>
                        </Box>
                    </CardContent>
                </Link>
            </Box>

            <SnackbarError
                isOpenNotification={isOpenNotification}
                setIsOpenNotification={setIsOpenNotification}
                isFavorite={isFavorite}
            />
        </Card>
    );
}

export { MovieCard };
