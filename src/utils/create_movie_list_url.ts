import { API } from "../api";

type CreatMovieListUrl = {
    page: number;
    years: number[];
    criteria: string;
    genres: {
        id: number;
        name: string;
    }[];
};

export const createMovieListUrl = ({ page, years, criteria, genres }: CreatMovieListUrl) => {
    const yearLte = `${years[0]}-01-01`;
    const yearGte = `${years[1]}-12-31`;
    const genresList = genres.map((item) => item.id).join(",");
    
    const url = `${API.URL}${API.LINKS.DISCOVER}?include_adult=false&include_video=false&language=ru&page=${page}&primary_release_date.gte=${yearLte}&primary_release_date.lte=${yearGte}&sort_by=${criteria}.desc&with_genres=${genresList}&vote_count.gte=300`;

    return url;
};
