const _apiUrl = "/api/patrons";

export const getPatrons = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const getPatron = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((r) => r.json());
}

export const editPatron = async (patronObj) => {
    const putOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(patronObj)
    }

    const response = await fetch(`${_apiUrl}/${patronObj.id}`, putOptions)
}

export const updatePatronActiveStatus = async (id) => {
    const putOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    };

    const response = await fetch(`/api/patronstatus/${id}`, putOptions);
    return response;
};
