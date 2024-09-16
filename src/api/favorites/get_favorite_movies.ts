import { API } from "..";
import { MovieList } from "../../types/types";
import { apiOptions } from "../config/api_сonfig";

export async function getFavoriteMovies() {
    let favoriteMovies: MovieList[] = [];
    let currentPage = 1;
    let totalPages = 1;

    while (currentPage <= totalPages) {
        const url = `${API.URL}${API.LINKS.GET_FAVORITE()}${API.LINKS.INFO}${
            API.LINKS.PAGE
        }${currentPage}&sort_by=created_at.asc`;
        try {
            const data = await fetch(url, apiOptions);
            const jsonData = await data.json();

            favoriteMovies = favoriteMovies.concat(jsonData.results);
            totalPages = jsonData.total_pages;
            currentPage++;
        } catch (error) {
            console.error("Failed to fetch favorite movies:", error);
        }
    }
    return favoriteMovies;
}
