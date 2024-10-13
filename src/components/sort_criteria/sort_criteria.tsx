import { useUnit } from "effector-react";
import { SORT_OPTIONS } from "../../constants/constants";
import { $filter, setSortCriteria } from "../../redux/features/filter/filter_slice";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

function SortCriteria() {
    const onSetSortCriteria = useUnit(setSortCriteria);
    const { sortCriteria } = useUnit($filter);

    const handleSortChange = (event: SelectChangeEvent<string>) => {
        if (event) {
            onSetSortCriteria(event.target.value);
        }
    };
    return (
        <Box sx={{ mb: "30px" }}>
            <FormControl variant="standard" fullWidth>
                <InputLabel variant="standard" htmlFor="sort-option">
                    Сортировать по:
                </InputLabel>
                <Select labelId="sort-option" value={sortCriteria} id="sort-option" onChange={handleSortChange}>
                    {SORT_OPTIONS.map((el) => (
                        <MenuItem key={el.id} value={el.value}>
                            {el.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export { SortCriteria };
