import { API } from "../../api";
import imgProfileisNone from "../../assets/photo_unavailable.jpg";
import { useState } from "react";
import { Cast } from "../../types/types";
import { STYLES } from "./styles";
import { Box, CardMedia } from "@mui/material";

type CastIMG = {
    cast: Cast[];
};

function SectionCastIMG({ cast }: CastIMG) {
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

    const handleImageLoad = (id: number) => {
        setLoadedImages((prev) => ({ ...prev, [id]: true }));
    };
    const imgActor = (actor: Cast) =>
        actor.profile_path ? `${API.LINKS.BASE_IMG}${actor.profile_path}` : imgProfileisNone;

    const loadedIMG = (actor: Cast) => !loadedImages[actor.id] && <Box sx={STYLES.IMAGE_LOADER_OVERLAY} />;

    return (
        <Box sx={STYLES.CONTAINER}>
            {cast.slice(0, 6).map((actor) => (
                <Box key={actor.id} sx={STYLES.BOX}>
                    {loadedIMG(actor)}
                    <CardMedia
                        component="img"
                        onLoad={() => handleImageLoad(actor.id)}
                        sx={STYLES.CARDMEDIA}
                        image={imgActor(actor)}
                    />
                </Box>
            ))}
        </Box>
    );
}

export { SectionCastIMG };
