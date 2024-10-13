import { useState } from "react";
import { getSearchMovies } from "../../api";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, InputAdornment } from "@mui/material";
import { $filter, setTotalPages } from "../../redux/features/filter/filter_slice";
import { INPUT_EMPTY } from "../../constants/constants";
import { useUnit } from "effector-react";
import { setMoviesList } from "../../redux/features/movies/movies_slice";

function Search() {
    const [inputSearch, setInputSearch] = useState(INPUT_EMPTY);

    const onSetTotalPages = useUnit(setTotalPages);
    const onSetMoviesList = useUnit(setMoviesList);

    const { currentPage } = useUnit($filter);

    const handleSearch = async () => {
        const moviesData = await getSearchMovies(inputSearch, currentPage);
        onSetMoviesList(moviesData.results);
        onSetTotalPages(moviesData.total_pages);
        setInputSearch(INPUT_EMPTY);
    };

    const handleKey: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
        if (event.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <Box sx={{ width: "100%", mb: "30px" }}>
            <TextField
                value={inputSearch}
                label="Поиск по названию"
                onChange={(e) => {
                    setInputSearch(e.target.value);
                }}
                onKeyDown={handleKey}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton type="button" aria-label="search" onClick={handleSearch}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </Box>
    );
}

export { Search };
