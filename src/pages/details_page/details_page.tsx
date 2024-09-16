import { useLoaderData, useNavigate } from "react-router-dom";
import { Box, Button, CardMedia, IconButton, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SnackbarError from "../../components/common/snack_bar";
import { handleToggleFavorite } from "../../utils/toggle_favorite";
import { API } from "../../api";
import { MoreMovieDetails } from "../../types/types";
import { useAppSelector } from "../../redux/hooks/hooks";
import { selectMovie } from "../../redux/features/movies/selectors";
import { SectionCastList } from "../../components/section_cast_list/section_cast_list";
import { SectionDetails } from "../../components/section_details/section_details";
import { SectionCastIMG } from "../../components/section_cast_img/section_cast_img";

const DEFAULT_STATE = {
    FAVORITE: false,
    NOTIFICATION: false,
};

function DetailsPage() {
    const [isOpenNotification, setIsOpenNotification] = useState<boolean>(DEFAULT_STATE.NOTIFICATION);
    const [isFavorite, setIsFavorite] = useState(DEFAULT_STATE.FAVORITE);
    const { idFavorite } = useAppSelector(selectMovie);

    const { detailsMovie, castList } = useLoaderData() as MoreMovieDetails;
    const { poster_path, title, release_date, id } = detailsMovie;
    const { cast, crew } = castList;

    useEffect(() => {
        const isFavoriteMovie = idFavorite() && idFavorite().some((idFavorite) => idFavorite === id);
        setIsFavorite(isFavoriteMovie);
    }, [idFavorite, id]);

    const formattedYear = new Date(release_date).getFullYear();

    const navigate = useNavigate();

    const handleOnClick = () => {
        handleToggleFavorite({
            id: id,
            setIsFavorite: setIsFavorite,
            isFavorite: isFavorite,
            setIsOpenNotification: setIsOpenNotification,
        });
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const iconIsFavorite = isFavorite ? (
        <StarIcon sx={{ width: 30, height: 30 }} />
    ) : (
        <StarBorderIcon sx={{ width: 30, height: 30 }} />
    );

    return (
        <Box
            sx={{
                display: "flex",
                maxWidth: "1650px",
                mx: "auto",
                px: { xs: 2, lg: 4 },
            }}
        >
            <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex" }}>
                    <CardMedia
                        sx={{ height: "550px", width: "400px", mr: "24px" }}
                        image={`${API.LINKS.BASE_IMG}${poster_path}`}
                    ></CardMedia>
                    <Box sx={{ mr: "30px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: "18px" }}>
                            <Typography variant="h4">
                                {title} ({formattedYear})
                            </Typography>
                            <Button size="small" color="primary" onClick={handleOnClick}>
                                {iconIsFavorite}
                            </Button>
                        </Box>
                        <IconButton sx={{ mb: "22px" }} onClick={handleBackClick}>
                            <KeyboardBackspaceIcon />
                        </IconButton>
                        <SectionCastList cast={cast} />
                        <SectionDetails detailsMovie={detailsMovie} crew={crew} />
                    </Box>
                </Box>
                <SectionCastIMG cast={cast} />
            </Box>
            <SnackbarError
                isOpenNotification={isOpenNotification}
                setIsOpenNotification={setIsOpenNotification}
                isFavorite={isFavorite}
            />
        </Box>
    );
}

export { DetailsPage };
