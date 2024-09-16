import { LoaderFunctionArgs } from "react-router-dom";
import { API } from "..";
import { apiOptions } from "../config/api_сonfig";

export async function loaderGetDetails(routeParameters: LoaderFunctionArgs) {
    const id = routeParameters.params.id;
    const urlDetailsFilm = `${API.URL}/movie/${id}${API.LINKS.INFO}`;
    const urlCastList = `${API.URL}/movie/${id}${API.LINKS.CREDITS}`;
    try {
        const responseFilm = await fetch(urlDetailsFilm, apiOptions);
        const responseActors = await fetch(urlCastList, apiOptions);
        const detailsMovie = await responseFilm.json();
        const castList = await responseActors.json();

        return { detailsMovie, castList };
    } catch (error) {
        return { docs: [] };
    }
}
