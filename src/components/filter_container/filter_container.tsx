import { SliderYears } from "../slider_years/slider_years";
import { BasicPagination } from "../pagination/pagination";
import { Search } from "../search/search";
import { SortCriteria } from "../sort_criteria/sort_criteria";
import { Box, Paper } from "@mui/material";
import { FilterTitle } from "../filter_title/filter_title";
import { SortGenres } from "../sort_genres/sort_genres";

function FilterContainer() {
    return (
        <>
            <Paper
                elevation={3}
                sx={{
                    width: "300px",
                    height: "623px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    border: "1px solid rgba(0, 0, 0, 0.50)",
                    justifyContent: "space-between",
                }}
            >
                <Box>
                    <FilterTitle />
                    <Search />
                    <SortCriteria />
                    <SliderYears />
                    <SortGenres />
                </Box>
                <Box>
                    <BasicPagination />
                </Box>
            </Paper>
        </>
    );
}

export { FilterContainer };
