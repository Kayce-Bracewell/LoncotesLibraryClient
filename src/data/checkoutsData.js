const _apiUrl = "/api/checkouts";

export const getCheckouts = () => {
    return fetch(_apiUrl).then((res) => res.json());
}

export const returnCheckout = async (id) => {
    const putOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(`${_apiUrl}/${id}`, putOptions)
    return response;
}