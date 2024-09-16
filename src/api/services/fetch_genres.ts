import { API, apiOptions } from "../config/api_сonfig";

export const fetchGenres = async () => {
    try {
        const response = await fetch(`${API.URL}${API.LINKS.GENRE}?language=ru`, apiOptions);

        const json = await response.json();
        return json.genres;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
