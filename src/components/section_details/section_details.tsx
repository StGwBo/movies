import { Box, Typography } from "@mui/material";
import { Crew, DetailsMovie } from "../../types/types";

type Details = {
    detailsMovie: DetailsMovie;
    crew: Crew[];
};

function SectionDetails({ crew, detailsMovie }: Details) {
    const { budget, vote_average, origin_country, tagline } = detailsMovie;

    const budgetChange = budget.toLocaleString();
    const formattedBuget = `${budgetChange}$`;
    const formattedAverage = vote_average.toFixed(1);
    const mainProducer = crew[0].name;

    return (
        <Box>
            <Typography variant="h5">Детали</Typography>
            {formattedBuget && <Typography>Бюджет: {formattedBuget}</Typography>}
            {origin_country && <Typography>Страна производства: {origin_country}</Typography>}
            {formattedAverage && <Typography>Рейтинг: {formattedAverage}</Typography>}
            {tagline && <Typography>Слоган: «{tagline}»</Typography>}
            {mainProducer && <Typography>Продюсер: {mainProducer}</Typography>}
        </Box>
    );
}

export { SectionDetails };
