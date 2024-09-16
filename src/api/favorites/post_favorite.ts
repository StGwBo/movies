import { API } from "../config/api_сonfig";

type ApiError = {
    isFetchError: boolean;
};

export async function postFavorite(movieId: number, isFavorite: boolean): Promise<ApiError> {
    const requestBody = {
        media_type: "movie",
        media_id: movieId,
        favorite: isFavorite,
    };

    const options = {
        method: API.METHODS.POST,
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: API.HEADERS.AUTHORIZATION,
        },
        body: JSON.stringify(requestBody),
    };

    const url = `${API.URL}${API.LINKS.SET_FAVORITE()}`;
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            return {
                isFetchError: true,
            };
        }
        return {
            isFetchError: false,
        };
    } catch (error) {
        return {
            isFetchError: true,
        };
    }
}
