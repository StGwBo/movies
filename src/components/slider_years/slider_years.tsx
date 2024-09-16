import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { selectFilter } from "../../redux/features/filter/selectors";
import { setSortYear } from "../../redux/features/filter/filter_slice";
import { Box, Slider, Typography } from "@mui/material";
import { sliderChange } from "../../utils/slider_change";
import { MARKS, YEAR_RANGE } from "../../constants/constants";

const [START_YEAR, CURRENT_YEAR] = YEAR_RANGE;

function SliderYears() {
    const dispatch = useAppDispatch();

    const { sortYear } = useAppSelector(selectFilter);

    const [value, setValue] = useState(sortYear);

    const handleFetch = () => {
        dispatch(setSortYear(value));
    };

    return (
        <Box sx={{ width: 268, mb: "30px" }}>
            <Typography sx={{ height: 36 }}>Год релиза:</Typography>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Slider
                    min={START_YEAR}
                    max={CURRENT_YEAR}
                    value={value}
                    onChange={sliderChange(setValue)}
                    valueLabelDisplay="auto"
                    disableSwap
                    marks={MARKS}
                    sx={{ width: 255 }}
                    onMouseUp={handleFetch}
                />
            </Box>
        </Box>
    );
}

export { SliderYears };
