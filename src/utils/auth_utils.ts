import { API } from "../api";

function getToken() {
    return localStorage.getItem("token");
}
function getAccountId() {
    return localStorage.getItem("accountId");
}
async function checkTokenValidity(token: string) {
    const options = {
        method: API.METHODS.GET,
        headers: {
            accept: API.HEADERS.ACCEPT,
            Authorization: `Bearer ${token}`,
        },
    };

    const url = `${API.URL}/movie/popular${API.LINKS.INFO}${API.LINKS.PAGE}1`;

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
    }
}

export { getToken, getAccountId, checkTokenValidity };
