import { YEAR_RANGE } from "../constants/constants";

const MIN_DISTANCE = 10;
const [START_YEAR, CURRENT_YEAR] = YEAR_RANGE;

export const sliderChange =
    (setValue: React.Dispatch<React.SetStateAction<number[]>>) =>
    (_: Event, newValue: number | number[], activeThumb: number): void => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (newValue[1] - newValue[0] < MIN_DISTANCE) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], CURRENT_YEAR - MIN_DISTANCE);
                setValue([clamped, clamped + MIN_DISTANCE]);
            } else {
                const clamped = Math.max(newValue[1], START_YEAR + MIN_DISTANCE);
                setValue([clamped - MIN_DISTANCE, clamped]);
            }
        } else {
            setValue(newValue);
        }
    };
