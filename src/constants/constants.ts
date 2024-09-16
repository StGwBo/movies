const MARKS = [{ value: 1950 }, { value: 1960 }, { value: 1980 }, { value: 2000 }, { value: 2020 }, { value: 2024 }];

const CURRENT_YEAR = new Date().getFullYear();
const YEAR_RANGE = [1950, CURRENT_YEAR];

const INPUT_EMPTY = "";

const SORT_OPTIONS = [
    { id: 0, value: "vote_count", label: "По популярности" },
    { id: 1, value: "vote_average", label: "По рейтингу" },
];

export { MARKS, YEAR_RANGE, SORT_OPTIONS, INPUT_EMPTY };
