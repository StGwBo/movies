import { API } from "..";

export async function getAccoutId(apiResponse: string) {
    const options = {
        method: API.METHODS.GET,
        headers: {
            accept: API.HEADERS.ACCEPT,
            Authorization: `Bearer ${apiResponse}`,
        },
    };

    const url = `${API.URL}${API.LINKS.ACCOUNT_ID}`;
    try {
        const responseAccount = await fetch(url, options);
        const jsonAccount = await responseAccount.json();

        return jsonAccount.id;
    } catch (error) {
        console.error(error);
    }
}
