import { useAppDispatch } from "../../redux/hooks/hooks";
import { resetFilters } from "../../redux/features/filter/filter_slice";
import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function FilterTitle() {
    const dispatch = useAppDispatch();

    const handleResetFilters = async () => {
        dispatch(resetFilters());
    };

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "64px",
                mb: "16px",
            }}
        >
            <Typography variant="h6" fontWeight="bold">
                Фильтры
            </Typography>
            <IconButton aria-label="delete" size="large" onClick={handleResetFilters}>
                <CloseIcon />
            </IconButton>
        </Box>
    );
}

export { FilterTitle };
