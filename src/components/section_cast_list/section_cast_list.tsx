import { Box, Typography } from "@mui/material";
import { Cast } from "../../types/types";

type CastList = {
    cast: Cast[];
};

function SectionCastList({ cast }: CastList) {
    return (
        <Box sx={{ mb: "30px" }}>
            <Typography sx={{ mb: "10px" }} variant="h5">
                В главных ролях
            </Typography>
            {cast.slice(0, 6).map((actor) => (
                <Typography key={actor.id} variant="h6">
                    {`${actor.name} в роли ${actor.character}`}{" "}
                </Typography>
            ))}
        </Box>
    );
}
export { SectionCastList };
