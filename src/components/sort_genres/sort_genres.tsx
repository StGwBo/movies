import { Sort } from "../../types/types";
import { useEffect, useState } from "react";
import { fetchGenres } from "../../api/services/fetch_genres";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { Autocomplete, Checkbox, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { selectFilter } from "../../redux/features/filter/selectors";
import { setSortGenres } from "../../redux/features/filter/filter_slice";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function SortGenres() {
    const [dataGenres, setDataGenres] = useState<Sort[]>([]);

    const dispatch = useAppDispatch();

    const { sortGenres } = useAppSelector(selectFilter);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchGenres();
            setDataGenres(response);
        };
        fetchData();
    }, []);

    const handleGenresChange = (_: unknown, value: Sort[]) => {
        dispatch(setSortGenres(value));
    };

    return (
        <Autocomplete
            sx={{ width: "268px", mb: "24px" }}
            multiple
            disableCloseOnSelect
            id="checkboxes-tags"
            options={dataGenres}
            getOptionLabel={(option) => option.name}
            onChange={handleGenresChange}
            value={sortGenres}
            renderInput={(params) => <TextField {...params} label={"Жанры"} />}
            renderOption={(props, option, { selected }) => (
                <li {...props}>
                    <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
                    {option.name}
                </li>
            )}
        />
    );
}

export { SortGenres };
