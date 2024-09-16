import { API, apiOptions } from "../config/api_сonfig";

export async function getSearchMovies(searchQuery: string, currentPage: number) {
    const url = `${API.URL}${API.LINKS.SEARCH}${searchQuery}&include_adult=true&language=en-US&page=${currentPage}`;

    try {
        const response = await fetch(url, apiOptions);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
