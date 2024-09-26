import { getToken, getAccountId } from "../../utils/auth_utils";

const accountId = getAccountId();
const token = getToken();

const API = {
    URL: "https://api.themoviedb.org/3",
    LINKS: {
        ACCOUNT_ID: "/account/account_id",
        // MOVIE: "/movie/",
        GENRE: "/genre/movie/list",
        SEARCH: "/search/movie?query=",
        DISCOVER: "/discover/movie",
        INFO: "?language=ru-RU",
        CREDITS: "/credits?language=en-EN",
        LANGUAGE: "language=ru-RU",
        PAGE: "&page=",
        GET_FAVORITE: () => `/account/${accountId}/favorite/movies`,
        SET_FAVORITE: () => `/account/${accountId}/favorite`,
        BASE_IMG: "https://image.tmdb.org/t/p/w400/",
    },
    METHODS: {
        GET: "GET",
        POST: "POST",
    },
    HEADERS: {
        ACCEPT: "application/json",
        AUTHORIZATION: `Bearer ${token}`,
        CONTENT_TYPE: "application/json",
    },
};

const apiOptions = {
    method: API.METHODS.GET,
    headers: {
        accept: API.HEADERS.ACCEPT,
        Authorization: API.HEADERS.AUTHORIZATION,
    },
};

export { apiOptions, API, accountId };
