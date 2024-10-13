import fetch from "cross-fetch";
import { apiOptions } from "../config/api_сonfig";

export async function getMovies(url: string) {
    try {
        const response = await fetch(url, apiOptions);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
