import { Box } from "@mui/material";
import { MovieContainer } from "../../components/movie_container/movie_container";
import { FilterContainer } from "../../components/filter_container/filter_container";

function MainPage() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: { xs: "100%", lg: "1650px" },
                mx: "auto",
                width: "100%",
                px: { xs: 2, lg: 4 },
            }}
        >
            <FilterContainer />
            <MovieContainer />
        </Box>
    );
}

export { MainPage };
